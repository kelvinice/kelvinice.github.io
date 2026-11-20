/**
 * Leak guard: fails if a confidential client name shows up anywhere that could be published.
 *
 * The banned terms live in reference/forbidden.txt (gitignored, one term per line, # for comments),
 * so the list itself is never published. Without that file (e.g. in CI) the check is skipped.
 *
 *   node scripts/check-confidential.mjs          scan every committable file, plus dist/ if built
 *   node scripts/check-confidential.mjs --push   pre-push hook: also scan the commits and tags being pushed
 *                                                (diffs + messages), reading the refs git passes on stdin
 */
import { execFileSync } from 'node:child_process'
import {
  existsSync,
  openSync,
  readFileSync,
  readSync,
  closeSync,
  readdirSync,
  statSync,
} from 'node:fs'
import { join, relative, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const listFile = join(root, 'reference', 'forbidden.txt')
const ZERO = /^0+$/

// Never worth reading as text.
const BINARY_EXT =
  /\.(png|jpe?g|gif|webp|avif|ico|cur|bmp|mp3|mpeg|ogg|wav|mp4|webm|woff2?|ttf|otf|eot|zip|gz|pdf)$/i

if (!existsSync(listFile)) {
  console.log('check-confidential: reference/forbidden.txt not found, skipping.')
  process.exit(0)
}

const terms = readFileSync(listFile, 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))

if (terms.length === 0) process.exit(0)

// Whole-word, case-insensitive; a space in a term matches any run of whitespace.
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')
const pattern = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${terms.map(escape).join('|')})(?![\\p{L}\\p{N}])`,
  'iu',
)

const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 512 * 1024 * 1024 })

const hits = []

function scanText(label, text) {
  text.split(/\r?\n/).forEach((line, i) => {
    const match = line.match(pattern)
    if (match) hits.push(`${label}:${i + 1}  "${match[0]}"`)
  })
}

function looksBinary(file) {
  if (BINARY_EXT.test(file)) return true
  const fd = openSync(file, 'r')
  const buf = Buffer.alloc(8000)
  const n = readSync(fd, buf, 0, buf.length, 0)
  closeSync(fd)
  return buf.subarray(0, n).includes(0)
}

function scanFile(file) {
  const rel = relative(root, file).replaceAll('\\', '/')
  if (pattern.test(rel)) hits.push(`${rel}  (file name)`)
  if (!looksBinary(file)) scanText(rel, readFileSync(file, 'utf8'))
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else scanFile(path)
  }
}

// 1. Everything git would let you commit: tracked files plus untracked, non-ignored ones.
for (const file of git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split(
  '\0',
)) {
  if (file && existsSync(join(root, file))) scanFile(join(root, file))
}

// 2. The build output, which is what actually gets published.
if (existsSync(join(root, 'dist'))) walk(join(root, 'dist'))

// 3. Pre-push: the commits (messages + diffs) and annotated tags about to leave this machine.
if (process.argv.includes('--push')) {
  const stdin = readFileSync(0, 'utf8')
  for (const line of stdin.split(/\r?\n/).filter(Boolean)) {
    const [localRef, localSha, , remoteSha] = line.split(' ')
    if (ZERO.test(localSha)) continue // deleting a remote ref

    if (git('cat-file', '-t', localSha).trim() === 'tag') {
      scanText(`${localRef} (tag message)`, git('cat-file', '-p', localSha))
    }

    const range = ZERO.test(remoteSha)
      ? [localSha, '--not', '--remotes']
      : [`${remoteSha}..${localSha}`]
    scanText(
      `${localRef} (commits)`,
      git('log', '-p', '--no-color', '--format=commit %h%n%B', ...range),
    )
  }
}

if (hits.length > 0) {
  console.error(
    `check-confidential: ${hits.length} confidential term(s) found. Nothing was pushed.\n`,
  )
  for (const hit of hits) console.error(`  ${hit}`)
  console.error('\nUse the codenames from reference/clients.md instead.')
  process.exit(1)
}

console.log('check-confidential: clean.')
