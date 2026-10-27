import { cpSync, createReadStream, existsSync, readdirSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import type { Plugin, ResolvedConfig } from 'vite'

/**
 * Serves prebuilt static apps (games, old demos) that live in `apps/<name>/`
 * at `/<name>/`, both in the dev server and in the production build.
 *
 * Keeping them out of `public/` keeps that folder for real site-wide files
 * and makes it obvious which code is legacy and not part of the React app.
 */

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.cur': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.mpeg': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.woff2': 'font/woff2',
}

export function legacyApps(appsDir = 'apps'): Plugin {
  let config: ResolvedConfig
  let root: string

  const listApps = () =>
    existsSync(root)
      ? readdirSync(root).filter((name) => statSync(join(root, name)).isDirectory())
      : []

  return {
    name: 'legacy-apps',

    configResolved(resolved) {
      config = resolved
      root = resolve(resolved.root, appsDir)
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? '').split('?')[0])
        const [, app, ...rest] = url.split('/')
        if (!app || !listApps().includes(app)) return next()

        // Match GitHub Pages: /app → /app/
        if (rest.length === 0) {
          res.statusCode = 301
          res.setHeader('Location', `/${app}/`)
          return res.end()
        }

        let file = normalize(join(root, app, ...rest))
        if (!file.startsWith(join(root, app))) return next()
        if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
        if (!existsSync(file)) return next()

        res.setHeader(
          'Content-Type',
          MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
        )
        createReadStream(file).pipe(res)
      })
    },

    closeBundle() {
      if (config.command !== 'build') return
      const outDir = resolve(config.root, config.build.outDir)
      for (const app of listApps()) {
        cpSync(join(root, app), join(outDir, app), { recursive: true })
      }
    },
  }
}
