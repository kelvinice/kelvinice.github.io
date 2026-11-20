/**
 * Smoke test for a deployed (or previewed) site: opens it in a real browser and fails unless
 * the page actually renders. A 200 response alone isn't enough: GitHub Pages once served the
 * source index.html, which loads /src/main.tsx and leaves the page blank.
 *
 *   node scripts/smoke-live.mjs <url>
 *
 * Checks: the module script comes from the built /assets/ folder and loads with 200, React
 * mounts a visible <h1> inside #root, and nothing throws during start-up. Retries a few times
 * so a fresh Pages deploy has time to propagate.
 *
 * Env: SMOKE_ATTEMPTS (default 5), SMOKE_DELAY_MS (default 15000),
 *      SMOKE_CHANNEL (e.g. "msedge" to use an installed browser instead of Playwright's Chromium).
 */
import { chromium } from 'playwright'

const url = process.argv[2]
if (!url) {
  console.error('Usage: node scripts/smoke-live.mjs <url>')
  process.exit(2)
}

const attempts = Number(process.env.SMOKE_ATTEMPTS ?? 5)
const delayMs = Number(process.env.SMOKE_DELAY_MS ?? 15000)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function check(browser, attempt) {
  // Cache-bust so a stale CDN copy of the old page can't pass or fail the check.
  const target = new URL(url)
  target.searchParams.set('smoke', `${Date.now()}-${attempt}`)

  const page = await browser.newPage()
  const errors = []
  const modules = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('response', (response) => {
    const request = response.request()
    if (request.resourceType() === 'script') modules.push(`${response.status()} ${response.url()}`)
  })

  try {
    const response = await page.goto(target.href, { waitUntil: 'load', timeout: 30000 })
    const problems = []
    if (!response?.ok()) problems.push(`page returned ${response?.status()}`)

    const entry = await page.getAttribute('script[type="module"][src]', 'src').catch(() => null)
    if (!entry) problems.push('no module <script src> in the HTML')
    else if (entry.includes('/src/')) problems.push(`HTML loads the source entry ${entry}`)
    else if (!entry.includes('/assets/')) problems.push(`unexpected module entry ${entry}`)

    const failedScripts = modules.filter((line) => !line.startsWith('200 '))
    if (failedScripts.length) problems.push(`script responses: ${failedScripts.join(', ')}`)

    const heading = await page
      .waitForSelector('#root h1', { state: 'visible', timeout: 15000 })
      .then((el) => el.innerText())
      .catch(() => null)
    if (!heading) problems.push('no visible #root h1 (React did not render)')
    if (errors.length) problems.push(`start-up errors: ${errors.join(' | ')}`)

    return { ok: problems.length === 0, problems, heading, entry, modules, final: page.url() }
  } finally {
    await page.close()
  }
}

const browser = await chromium.launch(
  process.env.SMOKE_CHANNEL ? { channel: process.env.SMOKE_CHANNEL } : {},
)
let result
try {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    result = await check(browser, attempt).catch((error) => ({
      ok: false,
      problems: [error.message],
    }))
    if (result.ok) break
    console.log(`Attempt ${attempt}/${attempts} failed: ${result.problems.join('; ')}`)
    if (attempt < attempts) await sleep(delayMs)
  }
} finally {
  await browser.close()
}

if (!result.ok) {
  console.error(`\nSmoke test FAILED for ${url}`)
  console.error(`  final URL:  ${result.final ?? 'n/a'}`)
  console.error(`  entry:      ${result.entry ?? 'n/a'}`)
  console.error(`  scripts:    ${result.modules?.join(', ') || 'n/a'}`)
  for (const problem of result.problems) console.error(`  problem:    ${problem}`)
  process.exit(1)
}

const heading = result.heading.replace(/\s+/g, ' ').trim()
console.log(`Smoke test passed for ${url}: "${heading}" rendered from ${result.entry}`)
