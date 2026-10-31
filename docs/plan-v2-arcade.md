# kelvinice.github.io: Improvement Plan

Status: **Phases 0–4 implemented (2026-10-27), not yet committed or deployed.** See §8 for what was decided and what's left.

---

## 1. Where things stand

### What's in the repo

```
/                       ← compiled Vite output, committed by hand (no source code)
├─ index.html           ← loads /assets/index-50a39daf.js (React 18 + DaisyUI + FontAwesome)
├─ assets/              ← hashed build files
├─ 1.jpg … 5.png        ← project screenshots (3.jpg alone is 1 MB)
├─ background.jpg, profile.jpg, blank.png, vite.svg
├─ bluejackpunk/        ← match-3 canvas game (static, prebuilt bundle.js)
├─ kelabyrinth/         ← canvas game (static) ─ hosted but NOT linked from portfolio
├─ spyfamily/           ← canvas game (static) ─ hosted but NOT linked from portfolio
├─ test/                ← "A-Launcher Management" demo ─ BROKEN (see below)
└─ tidak-peduli/        ← jQuery app + 1,400 bundled FontAwesome SVGs (5.7 MB)
```

Total: about 23 MB and 1,522 files, with no `package.json`, README, or `.gitignore`.

### Problems

| #   | Problem                                                                                                                    | Impact                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | **No source code for the portfolio.** Only the minified build is committed.                                                | Can't edit the site without reconstructing it. Every change means a manual build and copy. |
| 2   | **Manual publishing.** Build output is committed straight to `master`.                                                     | Easy to break the live site, noisy diffs, commit messages like "catheryn" and "-".         |
| 3   | **`/test/` is broken.** Its HTML references `/assets/index-14c5e1a4.js` (root), but the file lives at `/test/assets/`.     | The A-care Launcher demo shows a blank page.                                               |
| 4   | **Root is cluttered.** Images, games, and build files are all mixed together.                                              | Hard to tell what's what.                                                                  |
| 5   | **Scroll hijacking.** The old app takes over wheel, touch, and arrow keys to jump between sections.                        | Bad on trackpads, breaks keyboard and screen-reader users, feels janky on mobile.          |
| 6   | **Invalid and inaccessible markup.** `<button>` sits inside `<a>`, images have no `alt`, and there's no focus styling.     | Accessibility and Lighthouse penalties.                                                    |
| 7   | **No SEO or social metadata.** No description, Open Graph image, sitemap, or real favicon (it's the default `vite.svg`).   | Links shared on LinkedIn or WhatsApp show no preview, and search ranking suffers.          |
| 8   | **Unoptimised images.** JPG/PNG screenshots up to 1 MB with no responsive sizes.                                           | Slow first load on mobile.                                                                 |
| 9   | **Thin content.** It's a hero plus 5 cards. There's no about section, skills, experience, or CV, and two games are hidden. | Undersells the work.                                                                       |

---

## 2. Proposed stack

| Concern         | Choice                                                                                 | Why                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Build tool      | **Vite** (latest)                                                                      | Fast dev server, and you've used it before.                                                               |
| UI              | **React 19 + TypeScript**                                                              | Same as the previous site, so no new framework to learn. TypeScript catches mistakes in the project data. |
| Styling         | **Tailwind CSS v4** (`@tailwindcss/vite`)                                              | CSS-first config with no `tailwind.config.js`. Design tokens live in one CSS file.                        |
| Components      | Hand-rolled with Tailwind (DaisyUI optional, see questions)                            | A more distinctive look than stock DaisyUI cards.                                                         |
| Animation       | **Motion** (`motion/react`, formerly Framer Motion)                                    | Scroll-reveal and hover effects that respect `prefers-reduced-motion`.                                    |
| Icons           | **lucide-react** (UI) + **react-icons/si** (brand logos like GitHub, LinkedIn, React…) | Tree-shaken, so only the icons you use ship. Replaces the 3 FontAwesome packages.                         |
| Images          | **vite-imagetools**                                                                    | Converts screenshots to AVIF/WebP with responsive `srcset` at build time.                                 |
| Lint and format | **ESLint** (flat config) + **Prettier** (+ tailwind class sorting)                     | Consistent code.                                                                                          |
| Package manager | **pnpm** (already installed, v10)                                                      | Fast, with a strict lockfile.                                                                             |
| Hosting         | **GitHub Pages via GitHub Actions**                                                    | No more committed build output. Push to deploy.                                                           |

**Alternative:** Astro (also built on Vite) would give zero-JS static HTML and the best SEO, and React components could still be used where needed. It's worth considering if a blog or project write-ups are coming. Otherwise React + Vite is the simpler, more familiar choice.

---

## 3. New folder structure

```
kelvinice.github.io/
├─ .github/
│  └─ workflows/
│     ├─ deploy.yml          # push to master → build → deploy to Pages
│     └─ ci.yml              # PRs → lint + typecheck + build (no deploy)
├─ apps/                     # legacy static apps, copied verbatim into the build
│  ├─ bluejackpunk/          #   → served at /bluejackpunk/   (URL unchanged)
│  ├─ kelabyrinth/           #   → served at /kelabyrinth/    (URL unchanged)
│  ├─ spyfamily/             #   → served at /spyfamily/      (URL unchanged)
│  └─ a-launcher/            #   → served at /a-launcher/     (was /test/, fixed)
├─ public/                   # files served as-is at the site root
│  ├─ favicon.svg
│  ├─ og-image.png           # social preview card (1200×630)
│  ├─ resume.pdf             # optional
│  ├─ robots.txt
│  └─ 404.html               # GitHub Pages custom 404
├─ src/
│  ├─ assets/
│  │  ├─ images/             # profile, hero background
│  │  └─ projects/           # project screenshots (optimised at build)
│  ├─ components/            # reusable UI: Button, Card, Tag, ThemeToggle, SectionHeading…
│  ├─ sections/              # page sections: Hero, About, Skills, Projects, Experience, Contact, Footer
│  ├─ data/                  # ← all content lives here; edit these to update the site
│  │  ├─ profile.ts          #   name, tagline, bio, socials, email
│  │  ├─ projects.ts         #   project cards (title, desc, tags, links, image)
│  │  ├─ skills.ts
│  │  └─ experience.ts
│  ├─ hooks/                 # useTheme, useActiveSection…
│  ├─ lib/                   # small utilities (cn(), etc.)
│  ├─ styles/
│  │  └─ globals.css         # Tailwind import + theme tokens (light/dark)
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html                # Vite entry, with SEO/OG meta tags
├─ vite.config.ts            # includes a tiny plugin that copies apps/* → dist/*
├─ tsconfig.json
├─ eslint.config.js
├─ .prettierrc
├─ .gitignore                # node_modules, dist, .DS_Store…
├─ package.json
├─ pnpm-lock.yaml
├─ README.md                 # how to develop, add projects, publish
└─ plan.md                   # this file
```

**Why `apps/` rather than `public/`:** the games are self-contained prebuilt sites. Keeping them out of `public/` keeps that folder for real site-wide static files, and makes it obvious which code is legacy. A small Vite plugin copies each `apps/<name>/` to `dist/<name>/` at build time, so **existing public URLs keep working**. The one exception is `/test/`, which becomes `/a-launcher/` and gets a redirect page at `/test/`.

---

## 4. Development and publishing system

### Daily workflow

```bash
pnpm install          # once
pnpm dev              # local dev server with hot reload → http://localhost:5173
pnpm build            # production build → dist/
pnpm preview          # serve dist/ locally exactly as Pages will
pnpm lint             # ESLint
pnpm typecheck        # tsc --noEmit
pnpm format           # Prettier
```

### Publishing flow

```
feature branch ──PR──▶ ci.yml (lint + typecheck + build)  ✓
                         │
                    merge to master
                         │
                         ▼
                 deploy.yml: pnpm build → upload dist/ → GitHub Pages
                         │
                         ▼
              https://kelvinice.github.io  (live in ~1 min)
```

- **Nothing built is committed.** `dist/` is gitignored, and Actions builds and deploys it.
- You can also deploy by hand from the GitHub Actions tab ("Run workflow").
- If you prefer working directly on `master`, that's fine too: every push deploys.

### One-time switch-over (done carefully so the site doesn't go down)

1. Tag the current state as `legacy-v1`, so the old site can always be recovered.
2. Merge the new source plus workflows into `master`.
3. In **GitHub → Settings → Pages → Build and deployment → Source**, choose **"GitHub Actions"**. _(Only you can do this step.)_
4. Re-run the deploy workflow. The site is now served from the Actions build.

Between steps 2 and 3, Pages still serves the branch, and after step 2 the branch has no built `index.html`. Doing steps 3 and 4 right after merging keeps that window to about a minute. Alternatively, flip the setting first and then merge.

### Adding content later

- **New project card:** add an entry to `src/data/projects.ts` and drop a screenshot in `src/assets/projects/`.
- **New hosted demo or game:** drop its built folder into `apps/<slug>/`. It's live at `/<slug>/` on the next deploy.
- **Change bio, socials, or skills:** edit the matching file in `src/data/`.

---

## 5. Site redesign

### Sections (single page with smooth anchor scrolling, no scroll hijacking)

1. **Navbar:** sticky and translucent, highlights the active section, with a theme toggle and mobile menu.
2. **Hero:** name, role/tagline, short intro, CTA buttons (View projects · Contact · CV), and social icons. Subtle animated background (gradient or grid, no heavy JS).
3. **About:** photo, a 2–3 paragraph bio, and quick facts (location, focus areas).
4. **Skills / tech stack:** grouped (Frontend · Backend · Game/Canvas · Tools) with brand icons.
5. **Projects:**
   - Filter chips (All · Web · Games · Tools).
   - Card: optimised screenshot, title, description, tech tags, and icon links (Live demo · Source · Frontend · Backend · Reference).
   - Up to 2–3 "featured" projects shown larger.
   - Adds **Kelabyrinth** and **Spy Family**, which are already hosted but weren't listed.
   - Fixes the A-care Launcher demo link.
6. **Experience:** timeline (optional, needs your info).
7. **Contact:** email plus socials, with a clear CTA. No form backend is needed.
8. **Footer:** © year, "Built with …", and the source repo link.

### Look and feel

- Dark mode first, with a light mode toggle that follows the system setting and remembers your choice.
- One accent colour, clean typography (e.g. _Inter_ / _Geist_ for text, a mono font for small labels), and lots of whitespace.
- Fully responsive (360 px phone → widescreen).
- Respects `prefers-reduced-motion`.

### Quality targets

- Lighthouse **≥ 95** on Performance, Accessibility, Best Practices, and SEO.
- Semantic HTML, real `alt` text, visible focus rings, keyboard navigable.
- Meta description, Open Graph and Twitter cards, canonical URL, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema.
- ~~Initial JS bundle around 80 KB gzipped~~ Revised: React DOM alone is about 66 KB gzipped. The final bundle is 135 KB gzipped (React DOM 66, Motion 34 even with `LazyMotion`, icons 22, app 14). The only big lever left would be dropping Motion.

---

## 6. Implementation phases

| Phase                 | Work                                                                                                                                                | Output                        |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **0. Safety**         | Tag `legacy-v1`.                                                                                                                                    | Old site recoverable forever. |
| **1. Scaffold**       | Vite + React + TS + Tailwind v4, ESLint/Prettier, `.gitignore`, README. Move games into `apps/`, images into `src/assets/`, delete old build files. | Clean repo, `pnpm dev` works. |
| **2. Rebuild**        | Port existing content into `src/data/`, then build the components and sections above.                                                               | New site running locally.     |
| **3. Publish system** | `deploy.yml` + `ci.yml`, `apps/` copy plugin, 404 page, `/test` → `/a-launcher` redirect.                                                           | Push-to-deploy.               |
| **4. Polish**         | Image optimisation, SEO/OG, favicon, accessibility pass, Lighthouse check.                                                                          | Production-ready.             |
| **5. Optional**       | Blog/notes (MDX), analytics (privacy-friendly, e.g. GoatCounter), custom domain, i18n (EN/ID), Playwright smoke test.                               | Only if you want them.        |

Phases 1–4 are what I'd implement after approval. You'd do one manual step: the Pages setting in Phase 3.

---

## 7. Open questions

These are the decisions I need from you, also asked interactively:

1. **Framework:** React + Vite (recommended, familiar), Astro, or Svelte?
2. **`tidak-peduli`:** remove it, unlist it, or keep it? (See note below.)
3. **Extra sections:** Experience timeline, Skills, CV download, blog?
4. **Visual style:** minimal dark developer look, playful/game-flavoured, or keep the DaisyUI vibe?

Smaller details I'll need eventually. Placeholders are fine to start.

- Current **role/title** and a one-line tagline (e.g. "Full-stack developer · game dev hobbyist").
- A short **bio**, plus **experience** entries (company, role, dates, 1–2 bullets) if you want a timeline.
- **Skills** you want highlighted.
- **Contact email:** the old site used `kelvinices@gmail.com`. Keep that?
- **CV/resume PDF** to offer for download?
- **A-care Launcher:** it's described as a hospital system. Is it OK to host the demo publicly, or should the card show screenshots only? (It may be a client/employer product.)
- Source repos for **kelabyrinth** / **spyfamily**, if they exist, so the cards can link to them.
- **Custom domain** (e.g. `kelvinice.dev`) now or later?

### Note on `tidak-peduli`

This app generates a fake PeduliLindungi check-in screen. PeduliLindungi is the Indonesian government's COVID-19 app. As a portfolio piece, it can read to recruiters as "a tool for faking government health records", and it bundles 5.7 MB of FontAwesome assets. **I recommend removing it from the site** (it stays in git history and in its own `kelvinice/tidak-peduli` repo). I won't be adding it as a featured project or expanding it either way.

---

## 8. Decisions and status

### Decided

| Question                   | Answer                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework                  | React 19 + TypeScript + Vite 8 + Tailwind v4 + Motion                                                                                        |
| `tidak-peduli`             | Removed from the site                                                                                                                        |
| Sections                   | Hero, About, Skills, Projects, Experience, Contact (+ CV button once a PDF exists)                                                           |
| Style                      | Playful, game-flavoured: "0 Kelvin arcade" (pixel snow, synthwave horizon, pixel UI), plus a "snow day" light theme                          |
| `/test/` (A-Launcher demo) | Dropped. It needs a backend on `127.0.0.1:8000` and assumes root routing, so it could never work publicly. The card shows a screenshot only. |
| Role                       | Academic Development Section Head & Lecturer, Bina Nusantara University                                                                      |

### Built

- Phases 0–4 above. The legacy site is tagged `legacy-v1`.
- 16 project cards. The Wyn family is featured, the BINUS/lab work is described from `reference/`, and projects without a screenshot get generated cover art (the canvas games show their own sprites).
- Easter egg: the Konami code toggles a blizzard.

### Still to do (needs Kelvin)

1. **Settings → Pages → Source → GitHub Actions**, then push.
2. ~~Experience dates~~ Done from LinkedIn: 5 BINUS roles, Aug 2018 → now. A Books section was added for the 2 co-authored books.
3. Read the drafted bio and highlights in `src/data/profile.ts` and `experience.ts`.
4. Optional: `public/resume.pdf` + `resumeUrl`.
5. Optional: real screenshots for cover-art projects (Plagion, DocFlow, Celestview, SATU-GIZI, Wyn Fin, OnlyArts, Wyn Reel…).
6. ~~Plagion/Celestview naming~~ Done: both credit BINUS SLC.
7. ~~Wyn Fin link~~ Done: links winfin.vercel.app plus the source (the backend is still down).
8. ~~LinkedIn details~~ Done (from a pasted screenshot).
