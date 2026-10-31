# kelvinice.github.io

Kelvin's portfolio: **https://kelvinice.github.io**

A single-page, arcade-flavoured portfolio (React 19 + TypeScript + Vite + Tailwind CSS v4 + Motion), with a few older canvas games hosted alongside it.

## Quick start

Requires Node 22+ (`.nvmrc`) and pnpm 10 (`corepack enable` sets it up from `package.json`).

```bash
pnpm install
pnpm dev          # http://localhost:5173 (games are served too, e.g. /bluejackpunk/)
```

| Script                    | What it does                                                           |
| ------------------------- | ---------------------------------------------------------------------- |
| `pnpm dev`                | Dev server with hot reload                                             |
| `pnpm build`              | Typecheck + production build into `dist/`                              |
| `pnpm preview`            | Serve `dist/` locally, exactly what GitHub Pages will get              |
| `pnpm lint`               | ESLint                                                                 |
| `pnpm format`             | Prettier (also sorts Tailwind classes)                                 |
| `pnpm check`              | lint + format check + typecheck + build (what CI runs)                 |
| `pnpm check:confidential` | Scan for confidential client names (also runs on every `git push`)     |
| `pnpm snapshot:archive`   | Rebuild the frozen arcade archive in `apps/game/` from tag `arcade-v2` |

## Project structure

```
apps/                 Prebuilt static apps, copied as-is to /<name>/ (bluejackpunk, kelabyrinth, spyfamily,
                      game = frozen v2 arcade portfolio)
plugins/              Vite plugins (legacy-apps: serves/copies apps/)
scripts/              check-confidential (leak guard), snapshot-archive (builds apps/game/)
public/               Files served at the site root: favicon, og-image, 404.html, robots, sitemap
src/
  data/               ← all site content lives here
    profile.ts          name, role, bio, socials, CV link
    projects.ts         project cards
    skills.ts           skills "inventory"
    experience.ts       work history ("quest log")
    publications.ts     books ("spellbooks"), covers in src/assets/books/
  assets/             Images processed at build time (AVIF/WebP, responsive sizes)
  components/         Reusable UI (PixelButton, ProjectCard, PixelSnow, Navbar…)
  sections/           Page sections (Hero, About, Skills, Projects, Experience, Contact, Footer)
  hooks/ lib/ styles/ Helpers and the Tailwind theme (globals.css)
.github/workflows/    deploy.yml (master → Pages), ci.yml (PR checks)
reference/            Local notes only; gitignored, never published
```

## Updating content

- **Bio, role, socials, CV:** edit `src/data/profile.ts`. For the CV, put `resume.pdf` in `public/` and set `resumeUrl: '/resume.pdf'`; the buttons appear automatically.
- **A new project:**
  1. Save a screenshot (about 16:10) to `src/assets/projects/<slug>.png`.
  2. Import it in `src/data/projects.ts` with the `?picture` suffix.
  3. Add an entry. Without a screenshot, give the project a `cover: { tone, icon }` instead.
- **Experience:** edit `src/data/experience.ts`. Entries marked `placeholder: true` only show in `pnpm dev`.
- **A new hosted game or demo:** drop its built folder into `apps/<slug>/`. It goes live at `/<slug>/` on the next deploy. Use relative asset paths (`./assets/…`), not `/assets/…`.

## Publishing

Pushing to `master` deploys automatically:

```
branch → PR ──▶ CI (lint, format, types, build)
                    │ merge
                    ▼
master ──▶ Deploy workflow: pnpm build → upload dist/ → GitHub Pages (≈1 min)
```

You can also redeploy from **Actions → Deploy → Run workflow**. Build output (`dist/`) is never committed.

**One-time setup:** in GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Confidentiality

Some client work is under NDA and is described on the site with codenames only. The real names are kept in `reference/` (gitignored). `reference/forbidden.txt` lists the banned terms, and a pre-push hook (`.githooks/pre-push`, enabled by `pnpm install`) blocks any push whose files, diffs or commit messages contain one.

## Easter egg

↑ ↑ ↓ ↓ ← → ← → B A
