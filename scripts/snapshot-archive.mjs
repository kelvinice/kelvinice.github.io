/**
 * Freezes the v2 "arcade" portfolio into apps/game/, which the legacy-apps plugin serves at /game/.
 *
 * It builds the site exactly as it was at git tag `arcade-v2`, in a temporary worktree, so the archive
 * never depends on the current source. Nothing on the main site links to it. Run it once, or again
 * if the tag moves:
 *
 *   pnpm snapshot:archive
 */
import { spawnSync } from 'node:child_process'
import {
  cpSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const TAG = 'arcade-v2'
const BASE = '/game/'

const root = resolve(import.meta.dirname, '..')
const target = join(root, 'apps', 'game')
const tmp = mkdtempSync(join(tmpdir(), 'arcade-snapshot-'))
const worktree = join(tmp, 'src')
const out = join(tmp, 'dist')

// Use the pnpm that launched this script (works with corepack too), falling back to the one on PATH.
const pnpm = process.env.npm_execpath ? [process.execPath, process.env.npm_execpath] : ['pnpm']

function run(cmd, args, cwd) {
  const result = spawnSync(cmd, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32' && cmd === 'pnpm',
  })
  if (result.status !== 0) throw new Error(`Failed: ${cmd} ${args.join(' ')}`)
}

try {
  run('git', ['worktree', 'add', '--detach', worktree, TAG], root)
  run(pnpm[0], [...pnpm.slice(1), 'install', '--frozen-lockfile', '--prefer-offline'], worktree)
  run(
    pnpm[0],
    [...pnpm.slice(1), 'exec', 'vite', 'build', '--base', BASE, '--outDir', out, '--emptyOutDir'],
    worktree,
  )

  // The games stay at the site root (/bluejackpunk/ …), so drop the copies the v2 build made,
  // along with files that only make sense at the root.
  for (const app of readdirSync(join(worktree, 'apps')))
    rmSync(join(out, app), { recursive: true, force: true })
  for (const file of ['404.html', 'robots.txt', 'sitemap.xml', 'og-image.png'])
    rmSync(join(out, file), { force: true })

  // Keep the archive out of search results and link previews.
  const htmlFile = join(out, 'index.html')
  const html = readFileSync(htmlFile, 'utf8')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, '')
    .replace(/<!--\s*Open Graph[\s\S]*?-->\s*/g, '')
    .replace(/<meta\s+(?:property="og:|name="twitter:)[^>]*>\s*/g, '')
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')
    .replace(
      /<title>[\s\S]*?<\/title>/,
      '<title>Kelvinice · arcade archive</title>\n    <meta name="robots" content="noindex, nofollow" />',
    )
  for (const leftover of ['canonical', 'og:', 'twitter:', 'ld+json']) {
    if (html.includes(leftover)) throw new Error(`index.html still contains "${leftover}"`)
  }
  if (!html.includes('noindex')) throw new Error('index.html is missing the noindex tag')
  writeFileSync(htmlFile, html)

  if (existsSync(target)) rmSync(target, { recursive: true })
  cpSync(out, target, { recursive: true })
  console.log(`\nArchive written to apps/game/ from ${TAG}. Served at ${BASE}`)
} finally {
  // Delete the folder first, then let git forget the worktree (`worktree remove` trips over node_modules on Windows).
  rmSync(tmp, { recursive: true, force: true })
  spawnSync('git', ['worktree', 'prune'], { cwd: root, stdio: 'inherit' })
}
