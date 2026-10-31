# kelvinice.github.io

Kelvin's portfolio: **https://kelvinice.github.io**

A single-page professional portfolio for freelance clients (React 19 + TypeScript + Vite + Tailwind CSS v4), with a few older canvas games and the previous arcade-style portfolio hosted alongside it as static archives.

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
    profile.ts          name, role, headline, stats, socials, headshot
    work.ts             client case studies (NDA work: generic labels only) + "more work"
    services.ts         what clients can hire me for
    process.ts          Scrum steps + engineering practices
    experience.ts       work history + education
    skills.ts           tech stack groups
    projects.ts         products & side projects
    publications.ts     books, covers in src/assets/books/
  assets/             Images processed at build time (AVIF/WebP, responsive sizes)
  components/         Reusable UI (Navbar, CaseStudyCard, UiIllustration, Section, Reveal…)
  sections/           Page sections (Hero, Work, Services, Process, Experience, Stack, Projects,
                      Publications, Contact, Footer)
  hooks/ lib/ styles/ Helpers and the Tailwind theme (globals.css)
.github/workflows/    deploy.yml (master → Pages), ci.yml (PR checks)
reference/            Local notes only; gitignored, never published
```

## Updating content

- **Headline, stats, socials:** edit `src/data/profile.ts`. There is deliberately no CV download or phone number on the site.
- **A client case study:** add it to `src/data/work.ts`. Public clients can have a screenshot (`?picture` import) and a link. NDA work gets `confidential: true`, a generic `client` label and an `illustration`, never a real name, logo or screenshot. Run `pnpm check:confidential` afterwards.
- **A side project:** save a 16:10 screenshot to `src/assets/projects/<slug>.png`, import it in `src/data/projects.ts` with `?picture` and add an entry (or give it a lucide `icon` instead of a screenshot).
- **Experience:** edit `src/data/experience.ts`. Freelance entries have no dates on purpose.
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
