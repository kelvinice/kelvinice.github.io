# kelvinice.github.io: v3 "Professional" Rework Plan

Status: **Complete (2026-11-01), restyled 2026-11-20.** All phases are done (§11), including the merge to `master` that deploys v3. Decisions are in §9; §10 lists the details that shipped with defaults and can be changed any time; §12 is the open backlog; §13 is the "de-template" review. Its fixes were settled in a three-way review (§13.6), approved by Kelvin, and implemented on branch `v3.1-de-template` (not merged yet).

Changes in the 2026-11-20 merge (a parallel "editorial notebook" redesign of v2 was folded into v3):

- New look on the same v3 layout: **Frost Paper** (light) / **Obsidian Slate** (dark) tokens, a vermilion `signal` second accent,
  **Bricolage Grotesque** headings, **IBM Plex Sans** body and **IBM Plex Mono** labels. The theme still follows the OS until the visitor picks one.
- Logo and favicon stay the white snowflake on a blue rounded square, in fixed colours (identical in both themes).
- Real screenshots for **Plagion**, **DocFlow** and **DISC Personality Test** (approved by Kelvin for public use); DISC moved
  from "More work" into Projects. Project screenshots open in a keyboard-accessible **Lightbox**.
- The navbar's active-section highlight now clears at the top of the page.

Changes after Kelvin's first review (2026-11-01):

- No "Available for freelance projects" label anywhere (hero, OG image, meta).
- The Books section was hidden, not deleted, behind `showPublications` in `src/data/publications.ts`. Kelvin turned it back on (with its "Writing" nav item) on 2026-11-20; see [docs/three-way-review.md](docs/three-way-review.md) A14/A20.
- Experience lists only the BINUS roles; MidHub (a past role) appears as a case study with a real screenshot.
- Hero intro and meta descriptions are general ("web developer & software engineer, 8+ years"), not a list of past systems.
- Favicon and logo are a snowflake.
- Hospital asset management: full-stack, leading the backend.
- Every section below the hero has texture: dotted or grid paper, a soft accent glow, a gradient divider and a big outlined section number.
- More playful UI: typing headline, floating "dev" chips around the photo, tech-stack marquee, cursor spotlight on cards,
  illustrations that animate in, a connected Scrum stepper, scroll progress bar, and a ⌘K / Ctrl K command menu.
  All motion respects `prefers-reduced-motion`.
- Initial JS is 91.8 KB gzipped (slightly over the 90 KB target, for the command menu); CSS 11.5 KB.

The previous plan (v2, the arcade site) is in [docs/plan-v2-arcade.md](docs/plan-v2-arcade.md).

> **Confidentiality rule for this repo.** This repository is public: GitHub Pages user sites have to be.
> Real names of confidential clients must **never** appear in any committed file, commit message, branch name,
> file name, image, alt text, PDF or build output. This plan uses codenames only (Client A–D).
> The real-name map lives in `reference/clients.md` (gitignored) and nowhere else.

---

## 1. Goal

Change the main site from a playful "arcade" portfolio into a **professional software engineer portfolio aimed at freelance clients**.
A prospective client or tech lead should come away from 60 seconds on the page knowing:

1. **Kelvin is a software engineer / full-stack web developer** who ships production systems for real businesses.
2. **He has built and run business systems:** ERP, CMS, HRIS, e-tender/procurement, KPI dashboards, a marketplace backend, hospital asset management. The clients range from automotive and energy to heavy equipment and healthcare.
3. **He builds things properly:** Scrum/Agile delivery (he also _teaches_ Scrum at university), automated testing (Jest, Selenium, JMeter), and secure, role-based backends.
4. **He's available for freelance projects.** Not looking for full-time roles right now.

The arcade site is **kept as an archive at `/game/`**: frozen, never loaded by the new page, and never linked from it.

---

## 2. Positioning and copy direction

**Angle: "a full-stack developer who builds business systems and tests them properly."**
The CV leans hard on QA ("Web Developer, QA Automation Engineer"). The site leads with **building**, and quality and testing become the differentiator that makes a freelancer safe to hire.

| Today (v2)                                       | v3                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| "Lecturer & software developer"                  | **"Software Engineer · Full-stack Web Developer"**                                                      |
| Games first (Wyn family featured)                | **Client work first**; Wyn apps become "side projects", canvas games stay in the archive                |
| RPG language ("quest log", "inventory", "guild") | Plain, confident language ("Selected work", "Experience", "Tech stack")                                 |
| BINUS as the identity                            | BINUS as the long-running employer; Section Head, lecturing and books are credibility, not the headline |
| No process story                                 | **"How I work"**: Scrum/Agile delivery plus a testing-first habit                                       |
| No call to action for hiring                     | **"Have a project in mind?"** CTAs throughout                                                           |

**Draft hero copy:**

> **Kelvin**
> Software Engineer · Full-stack Web Developer
> I build business systems for the web, from ERP and CMS platforms to HR, procurement and KPI dashboards,
> and I test them properly before they ship.
>
> [ Start a project ] [ View selected work ] [ GitHub ] [ LinkedIn ]
>
> `8+ years building software` · `10+ production systems` · `2 published books`

Tone rules: first person, short sentences, concrete nouns (modules, users, endpoints, load tested at N users), and no hype words.

---

## 3. Information architecture (single page, anchor nav)

1. **Navbar:** name on the left; Work · Services · Process · Experience · Contact; theme toggle; **"Start a project"** button.
2. **Hero:** headline, value proposition, CTAs, proof stats.
3. **Selected work (case studies).** The core of the page. 6 featured cards, each expanding into a panel:
   Context → **My role** → **What I built / maintained** → **Stack** → **How it was tested** → **Outcome**.
   Confidential work gets an "Under NDA" chip and SVG illustrations instead of screenshots (§6).
4. **Services:** what a client can hire Kelvin for:
   - Custom business systems: ERP, back-office, HRIS, procurement/e-tender
   - Company websites with a CMS
   - Dashboards & reporting (KPI, operational monitoring)
   - APIs & backend services (NestJS, Laravel, .NET): auth, RBAC, integrations
   - Maintenance & takeover of existing systems (CodeIgniter/Laravel legacy included)
   - Testing & QA: automated regression, load/stress testing
5. **How I work:** Scrum/Agile as a horizontal flow:
   `Discovery → Backlog & estimate → 2-week sprints → Demo every sprint → Release → Support`
   Practices: user stories and acceptance criteria, Git and PR review, CI/CD, Jest/PHPUnit tests, JMeter before launch, hand-over docs.
   A credibility line: _"I also teach Scrum and software testing at BINUS University."_
6. **Experience:** a timeline. Engagement types and dates stay **flexible** (see §4): BINUS roles with dates, plus a single "Freelance & contract work" entry that lists clients without exact dates.
7. **Tech stack:** compact groups: Frontend · Backend · Data · Testing & QA · DevOps · AI/automation.
8. **Side projects:** Wyn family (Wyndoku, Wyn State, Wyntabi, Wyn Fin), Plagion, DocFlow, Celestview, SATU-GIZI, 360 Maker. Smaller cards.
9. **Publications & teaching:** the two books, plus one line on lecturing (software testing, QA, Scrum).
10. **Contact:** "Have a project in mind?", with email, LinkedIn and GitHub (**no WhatsApp, no phone number, no CV download**) and a short "what to include" hint (goal, timeline, budget range).
11. **Footer:** © year, "Built with React + TypeScript", source link. **No link to `/game/`.**

---

## 4. Work inventory

### Client & contract work

| Key      | Public label (draft)                                         | What Kelvin did                                                                                                             | Stack (known)        | Named?                             |
| -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------- |
| BJ       | **Bersama Jaya Bordir Studio**, embroidery workshop, Jakarta | Company website **+ CMS + ERP**; public site has a price calculator and lead form                                           | Next.js (+ ?)        | Yes, links bersamajaya.vercel.app  |
| MidHub   | **MidHub.id**, heavy-equipment marketplace                   | **Backend engineer** on the core modules: **product listings**, **premium** (membership/promoted listings) and **payments** | ? (frontend Next.js) | Yes, links midhub.id               |
| Client A | "A multinational automotive manufacturer in Indonesia" ✔     | **HRIS** + **e-Tender / procurement system**                                                                                | ?                    | No                                 |
| Client B | **Cakra Motor 11**, automotive retail & distribution         | **ERP**: developed and maintained core backend features                                                                     | Laravel              | Yes (approved 2026-11-20), no link |
| Client C | "An energy company"                                          | **Maintained & enhanced** their corporate website/CMS, including statistical reporting                                      | CodeIgniter          | No                                 |
| Client D | "A large state-owned enterprise" ✔                           | **KPI dashboard**: real-time performance and job monitoring                                                                 | Laravel              | No                                 |
| HAM      | "Multi-hospital asset management platform"                   | **Led backend**: dynamic RBAC; calibration, maintenance, inspection and lifecycle workflows; Jest suites                    | NestJS, Jest         | Generic already                    |
| IoT      | "Hospital tool monitoring & RFID infant tracking"            | Real-time tracking systems                                                                                                  | ?                    | Generic already                    |

**Wording rules:**

- Use "built" vs "maintained & extended" honestly. Client C is maintenance; Client B is "developed and maintained".
- A description can identify a client without the name. Avoid "state electricity utility" (Client D), "Japanese truck maker" (Client A), "upstream oil & gas" if it narrows things down too far (Client C).
- No logos, client colour schemes, module/screen names copied from their UI, employee names or real data.
- Engagement type and dates stay **flexible**: case studies don't show dates or who the contract was through.

### BINUS R&D work (can be named as BINUS)

- Secure data-transfer system and dashboard for a **national pandemic hospital** (encrypted, high availability; endpoints load-tested with JMeter).
- **National-level competition website**, with registration/submission flows stress-tested for nationwide spikes.
- **DISC personality assessment** website for hiring and career development.
- Employee-data **microservices** (NestJS), with secure service-to-service authentication shown by before/after JMeter benchmarks.
- **Plagion** (AI plagiarism checker), **DocFlow** (graduation document automation), **Celestview** (360° reviews): already written up in v2 data.

### Featured six (proposal)

1. **Bersama Jaya**: CMS + ERP (the only one with a real screenshot and a live link)
2. **Client A**: HRIS + e-Tender
3. **Client B**: Automotive ERP
4. **HAM**: Hospital asset management (RBAC + workflows + tests, a strong engineering story)
5. **MidHub**: Marketplace backend
6. **Client D**: KPI dashboard

Client C, IoT, the pandemic dashboard and the competition site go in a compact "More work" list below.

### Case-study data shape (`src/data/work.ts`)

```ts
{
  slug: 'automotive-erp',
  client: 'Automotive retail & distribution group', // never a real name for NDA work
  confidential: true,
  industry: 'Automotive',
  systems: ['ERP'],
  role: 'Backend developer',
  verb: 'Developed & maintained',            // or 'Built', 'Maintained & extended', 'Led backend'
  summary: 'One sentence a client remembers.',
  built: ['…'],
  tested: ['Automated regression suite'],
  outcome: ['…'],
  stack: ['Laravel', 'MySQL'],
  link?: 'https://…',                        // public projects only
  visual: { kind: 'illustration', variant: 'erp' } | { kind: 'screenshot', image },
}
```

---

## 5. Archive: the arcade site at `/game/`

### Decided

- The archive **never loads with the new page**, which has no trigger, overlay, Konami code or link.
- The **only way in is the URL `/game/`** (GitHub Pages redirects `/game` to `/game/` automatically).
- Implementation: **frozen snapshot**. Build the current v2 site once and commit the built files to `apps/game/`. The existing `legacy-apps` Vite plugin already copies everything in `apps/` into the build as-is, the same way the canvas games are served.

Why a frozen snapshot rather than keeping the v2 source around: the archive can't break when dependencies are upgraded, its CSS can't collide with the new site's Tailwind tokens, and the new site can drop Motion, Press Start 2P, Space Grotesk and the pixel components. The source stays recoverable from git tag `arcade-v2`.

### Snapshot steps (`scripts/snapshot-archive.mjs`, run once)

1. Tag the current commit `arcade-v2`. (The v2 plan mentions a `legacy-v1` tag, but no such tag exists locally or on `origin`. Create it on `d57769b` if wanted.)
2. Build with `vite build --base=/game/` so its `/assets/*` files don't collide with the new site's.
3. Patch its `index.html`: add `<meta name="robots" content="noindex">`; remove the canonical URL, OG/Twitter tags and JSON-LD (so the old "Lecturer" identity never shows up in search or link previews); title "Kelvinice: arcade archive".
4. Copy `dist/` → `apps/game/`.
5. Check that the archive's links to `/bluejackpunk/`, `/kelabyrinth/` and `/spyfamily/` still work; the games stay where they are.
6. Keep `/game/` **out of** `sitemap.xml` and `robots.txt` (a `Disallow` line would advertise it). Remove the three games from the sitemap too, since they're archive material now.
7. The Konami "blizzard" easter egg keeps working **inside** the archive.

---

## 6. Visual direction

- **Mood:** calm, engineered, trustworthy, with an editorial "technical notebook" feel. Lots of whitespace, strong type, one accent.
- **Palette (updated 2026-11-20):** **Frost Paper** light (`#f6f7f9` canvas, `#11161f` ink, `#026aa2` glacial blue, `#c94624` vermilion signal)
  and **Obsidian Slate** dark (`#0e1116` canvas, `#edf1f7` ink, `#6bc5ff` blue, `#f07148` coral signal). Follows the system setting, with the choice remembered.
  The signal colour is for rare emphasis only.
- **Type (updated 2026-11-20):** _Bricolage Grotesque_ for headings and big numbers, _IBM Plex Sans_ for text, _IBM Plex Mono_ for labels, dates and stack tags.
- **Motion:** subtle CSS only. **Drop the Motion library** (~34 KB gzipped).
- **NDA visuals:** **abstract UI illustrations** as small SVG components (`erp`, `hris`, `tender`, `dashboard`, `cms`, `marketplace`, `assets`): neutral wireframe tables, charts and flows, tinted per project. They read as "real enterprise system" without leaking anything.
- **Real screenshots:** only for Bersama Jaya, MidHub (if allowed) and side projects.
- **Photo: done.** `src/assets/images/headshot.jpg` is a 480×480 square crop of the new portrait (35 KB, purple edge bands and corner artefact removed). Imported with `?avatar`, the build outputs 160/320 px AVIF/WebP/JPEG, so the page loads roughly 10–20 KB. Shown as a medium circle or rounded square beside the hero copy, never full-width. The BINUS polo fits since BINUS is named publicly anyway. The old `profile.jpg` moves to the archive. The uncropped original (`photo/kelvin.png`, 463 KB) should move to `reference/` and not be committed.

---

## 7. Technical plan

### Stack (unchanged core)

React 19 · TypeScript · Vite 8 · Tailwind v4 · pnpm · GitHub Actions → Pages. No router: single page plus static `/game/`.

### Folder changes

```
apps/
  game/                                   ← NEW: frozen v2 build (noindex)
  bluejackpunk/ kelabyrinth/ spyfamily/   (unchanged, linked from the archive only)
docs/plan-v2-arcade.md                    ← previous plan
src/
  data/
    profile.ts       rewritten: headline, value prop, stats, availability ("freelance")
    work.ts          NEW: case studies + "more work" (§4)
    services.ts      NEW
    process.ts       NEW: Scrum steps + practices
    experience.ts    rewritten wording + flexible "Freelance & contract" entry
    skills.ts        regrouped; adds Laravel, CodeIgniter, Express, Angular, Flutter, Jest, Selenium, JMeter, PHPUnit
    projects.ts      → side projects only (canvas games removed)
    publications.ts  kept
  components/        new: CaseStudyCard, CaseStudyPanel, UiIllustration, Timeline, StatRow, ProcessFlow
                     removed: PixelButton, PixelSnow, PixelSnowflake, CoverArt, useKonamiCode
  sections/          Hero, Work, Services, Process, Experience, Stack, SideProjects, Publications, Contact, Footer
scripts/
  snapshot-archive.mjs     one-off (§5)
  check-confidential.mjs   leak guard (§8)
```

### Budgets

- Initial JS **≤ 90 KB gzipped** (v2: 135 KB). Shipped: 91.8 KB, accepted for the command menu.
- Lighthouse ≥ 95 in all four categories; LCP < 1.5 s on desktop.
- `/game/` costs 0 bytes on the main page.

### SEO / meta

- Title: "Kelvin, Software Engineer · Full-stack Web Developer (Jakarta)".
- Description kept general: "Kelvin is a web developer and software engineer in Jakarta with 8+ years of experience…".
- New OG image (snowflake mark, no availability label); JSON-LD `Person` with `jobTitle: "Software Engineer"`, general `knowsAbout` (web development, software engineering, Scrum, Laravel, NestJS, React, Next.js, test automation), plus `alumniOf` BINUS.
- `sitemap.xml`: root only.

---

## 8. Confidentiality safeguards

1. **Codenames in the repo.** The real names live only in `reference/clients.md` (gitignored; **created**).
2. **`scripts/check-confidential.mjs`** reads banned terms from `reference/forbidden.txt` (gitignored; **created**) and scans `src/`, `public/`, `apps/`, `index.html`, `dist/`, PDF text and the commit messages being pushed. It runs as a local `pre-push` hook. CI can't see the list, so it skips the scan; that's intentional.
3. **No CV on the site.** The CV is only source material for the copy: it names Clients B, C and D and includes a phone number, so no PDF, download button or `resumeUrl` gets published. Copy taken from it must be rewritten with the codename labels.
4. Strip EXIF/XMP from every committed image.
5. Git history is clean today. If a name slips in, rewrite before pushing: once it's pushed, treat it as public.
6. Kelvin approves all public wording (§4) before merge.

---

## 9. Decisions so far

| Question                 | Answer                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| Archive loading          | Must not load with the new page → frozen snapshot, separate static page                        |
| How to open the archive  | **Only** via URL `/game/`; no trigger or link in the new site                                  |
| Career goal              | Freelance clients; not looking for full-time right now                                         |
| Engagement types / dates | Keep flexible: no dates or contracting entity on client case studies                           |
| Bersama Jaya scope       | CMS **and** ERP                                                                                |
| Client C scope           | Maintenance & enhancement of their CMS / corporate web, not a new build                        |
| Scrum role               | Developer in Scrum teams; also **teaches Scrum** at BINUS                                      |
| CV                       | **Not listed on the site** (no PDF, no download button); used only as source material for copy |
| MidHub.id                | Named and linked; backend engineer on the core modules: product listings, premium and payments |
| Client A label           | "A multinational automotive manufacturer in Indonesia"                                         |
| Client D label           | "A large state-owned enterprise"                                                               |
| Experience number        | **8+ years** (counted from Aug 2018)                                                           |
| Contact channels         | Email, LinkedIn, GitHub only; **no WhatsApp or phone number**                                  |
| Headshot                 | `src/assets/images/headshot.jpg` (done, §6)                                                    |
| Canvas games             | Stay hosted, linked only from the archive (default; easy to change)                            |
| Availability label       | **None**: no "Available for freelance" badge or wording                                        |
| Books                    | **Shown** (2026-11-20), but small or near the bottom; not in the hero or as a main section     |
| Experience timeline      | BINUS roles only; MidHub (finished) and client work appear as case studies                     |
| Hospital asset role      | Full-stack developer, leading the backend                                                      |
| Descriptions             | General ("web developer & software engineer, 8+ years"), not a list of past systems            |
| Logo / favicon           | Snowflake                                                                                      |
| Client B                 | **Public** (2026-11-20): may be named as Cakra Motor 11; no longer under NDA                   |

---

## 10. Details shipped with defaults (change any time in `src/data/`)

| #   | Item                                                               | Default if no answer                                                                                                               |
| --- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Bersama Jaya: admin/ERP screenshot with dummy data? CMS/ERP stack? | Public-site screenshot only; stack shown as "Next.js · CMS · ERP"                                                                  |
| 2   | Client A: stack, your role, main modules                           | "Full-stack developer"; modules: employee data, leave/attendance, vendor registration, tender bidding & evaluation (edit if wrong) |
| 3   | MidHub: backend stack and rough period                             | Stack line omitted; no dates (consistent with "keep it flexible")                                                                  |
| 4   | Hospital asset management: same client as v2's A-care Launcher?    | Treated as separate, both anonymous                                                                                                |
| 5   | Headline "Software Engineer · Full-stack Web Developer"            | Used as written                                                                                                                    |

---

## 11. Phases

| Phase                   | Work                                                                                                 | Status  |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| **0. Safety**           | Tags `arcade-v2` + `legacy-v1`; `reference/` map; leak guard + pre-push hook                         | ✅ Done |
| **1. Archive snapshot** | `snapshot-archive.mjs` → `apps/game/` (noindex, no OG), games out of the sitemap                     | ✅ Done |
| **2. Foundation**       | Tokens + fonts (now Frost Paper / Obsidian Slate, Bricolage + IBM Plex), Motion and pixel UI removed | ✅ Done |
| **3. Content**          | `profile`, `work`, `services`, `process`, `experience`, `skills`, `projects` data                    | ✅ Done |
| **4. Sections**         | Hero, Work, Services, Process, Experience, Stack, Projects, Contact (+ hidden Books)                 | ✅ Done |
| **5. Archive trigger**  | Dropped by decision: `/game/` is URL-only                                                            | ✅ N/A  |
| **6. Polish**           | SEO/OG/JSON-LD, favicon, 404, a11y, reduced motion, playful UI, textured sections                    | ✅ Done |
| **7. Ship**             | Merge `v3-rework` → `master`; the Deploy workflow publishes to GitHub Pages                          | ✅ Done |

Verified before shipping: lint, Prettier, typecheck, production build, `check-confidential` (files, `dist/` and every pushed commit),
no `/game` reference in the main page, dark/light/mobile screenshots, command menu (shortcut, filter, Enter → section).

---

## 12. Backlog

Carried over from the parallel redesign's TODO list (2026-11-20). Items that contradict §9 were dropped on purpose:
no CV/`resume.pdf`, no "open to"/availability wording, no games-first ordering, no Konami/snow egg on the main page,
no Books nav item while `showPublications` is off.

**Visual & QA**

- [ ] Refresh `public/og-image.png` (and `apple-touch-icon.png`) in the Frost Paper palette.
- [ ] Lighthouse ≥ 95 (mobile + desktop) and a WCAG AA contrast check of both new themes, incl. the `signal` colour.
- [ ] Visual pass of Frost Paper / Obsidian Slate on mobile, tablet and desktop.

**Experience** (BINUS roles only, §9)

- [ ] Section Head: scope of the section, key initiatives led.
- [ ] Lecturer: courses taught (software testing, QA, Scrum…), cohort scale, supervision.
- [ ] R&D Staff/Officer: name the flagship systems, users served, mentoring/architecture ownership; add `tech` per role.
- [ ] Teaching Assistant: lab/practicum context.

**Projects**

- [ ] DISC Personality Test: real `tech` tags (left empty rather than guessed).
- [ ] Screenshots for Celestview, SATU-GIZI and Wyn Fin (still icons). Demo data only, nothing confidential.
- [ ] Optional 2–3 shot galleries for Plagion and DocFlow (the Lightbox could page through them).
- [ ] Optional year/role tags on side projects (never on client case studies; dates stay flexible there).

**Writing & credibility** (only relevant once `showPublications` is back on)

- [ ] Plagion paper (venue, year, DOI) once published; Google Scholar / ORCID / SINTA links next to the books.
- [ ] JSON-LD `Book` entries for the two books.
- [ ] Optional: talks, workshops, awards; 2–3 short engineering write-ups (Plagion pipeline, DocFlow OCR, Wyndoku puzzle generation).

**Later**

- [ ] Privacy-friendly analytics (GoatCounter / Cloudflare Web Analytics), Playwright smoke test in CI, custom domain.

---

## 13. De-template review (2026-11-20)

**Question:** does the site still feel like AI slop or a template?
**Verdict:** not slop (nothing broken or fake), but **template-y**. The layout is the recognisable 2025 dev-portfolio kit and the copy has LLM cadence,
so it reads as generic within ~5 seconds even though the underlying work is real. Reviewed from production-build screenshots (light, dark, mobile) and the copy in `src/data/`.

> **Tension to resolve first.** Several of the tells below (typing headline, floating chips, marquee, cursor spotlight, ⌘K menu) were added because
> Kelvin asked for a "more playful UI" after the first review (see the top of this file). The proposal is to keep the playfulness but make it
> _personal_ (snowflake, Wyn games, teaching) instead of generic developer UI. Kelvin decides which pieces go.

### 13.1 What reads as template

| #   | Where                                | Tell                                                                                                                                                                                                               |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| T1  | Hero                                 | `~/jakarta $ whoami` prompt + typing headline ("I build … that teams rely on") + floating "tests passing" / `const stack` chips + 3 vanity stats + tech marquee. Each is fine; all five together are the template. |
| T2  | Every section                        | Same frame six times: eyebrow line, short heading, intro, giant outlined `01–06`, dotted/grid backdrop, glow, grid of rounded cards. The uniform rhythm is the main "generated" signal.                            |
| T3  | Selected work                        | 4 of 6 featured cards show near-identical grey wireframe illustrations that look like loading skeletons. The most important section has the weakest visuals.                                                       |
| T4  | Services + Process                   | Six-icon services grid and a numbered Discovery → Support stepper with a green-tick checklist: agency boilerplate that could sit on any site.                                                                      |
| T5  | ⌘K menu + footer "Tip: press Ctrl K" | Gimmick on a single-page site.                                                                                                                                                                                     |
| T6  | Cards everywhere                     | Same rounded-2xl card, hover lift and cursor spotlight on every grid.                                                                                                                                              |

### 13.2 What sounds AI-written (copy)

| #   | Example                                                                                                                                                                                                                | Where                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| C1  | "X, not Y" constructions: "on a staging link, not slides", "before launch day, not after", "the process isn't a buzzword here"                                                                                         | `process.ts`, `services.ts`, Process section |
| C2  | Stock phrases: "Inherited a system nobody wants to touch?", "a calm deploy", "that teams rely on"                                                                                                                      | `services.ts`, `process.ts`, Hero            |
| C3  | Repeated phrase "from database schema to deployed UI" in both the hero intro and the Services intro                                                                                                                    | `profile.ts`, Services section               |
| C4  | Vague case-study bullets with no numbers: "Core backend features across the ERP modules", "New features shipped without breaking existing flows", "Data routing between modules, tuned for stability under daily load" | `work.ts`                                    |
| C5  | Hero intro could describe any developer                                                                                                                                                                                | `profile.ts` `intro`                         |
| C6  | Unverifiable vanity stats ("10+ production systems shipped", "6 years in R&D engineering")                                                                                                                             | `profile.ts` `stats`                         |

### 13.3 What already feels genuine (keep and build on)

- Concrete numbers: DocFlow "48 of 48 scans filed correctly in 95 seconds", SATU-GIZI "171 API endpoints".
- Honest scope wording ("Developed & maintained", "leading the backend") and the plain NDA explanation.
- Real headshot and the real BINUS screenshots.
- Contact panel "A good first message includes…" (useful, not decorative).
- Bricolage Grotesque headings give the type some character.
- **The buried differentiator:** Kelvin ships production systems _and_ teaches software testing and Scrum at university, wrote a Selenium testing-framework thesis,
  and co-authored two books. Today that is one line inside the Process box; it should be the hook.

### 13.4 Planned fixes (ordered by impact ÷ effort)

Copy changes are drafted first and approved by Kelvin before anything is changed in `src/`.

> **Superseded by §13.6.** F1–F11 are kept below as the original review. The agreed scope, order and PR split are in [docs/three-way-review.md §7](docs/three-way-review.md#7-agreement-closed-2026-11-20-compiled-by-claude).

- [ ] **F1 · Hero (T1, C5, C6).** Remove the prompt, typing effect, floating chips and marquee. One fixed headline only Kelvin can say,
      e.g. _"I build business systems and test them properly. I also teach software testing at BINUS."_ Replace the vanity stats with checkable ones
      (e.g. "8+ years", "2 books", students taught).
- [ ] **F2 · Copy pass (C1–C3).** Remove "X, not Y" lines, clichés and the repeated phrase across `profile.ts`, `services.ts`, `process.ts` and section intros.
- [ ] **F3 · Case studies (T3, C4).** One hard number per case study (users, modules, records, concurrent load tested). Make NDA cards text-led instead of fake UI,
      or give each one a distinctive illustration of its actual flow (still anonymised, §8). Consider an ERP screenshot with dummy data for Bersama Jaya (§10 #1).
- [ ] **F4 · Fewer, less uniform sections (T2, T4).** Merge Services + Process into one section; turn Stack into a compact line list.
      Vary the section frames (not every section needs eyebrow + numeral + backdrop + glow).
- [ ] **F5 · Remove generic decoration (T2, T5, T6).** Drop the outlined numerals, cursor spotlight and ⌘K menu (also frees ~JS budget, §7).
      Keep at most one signature visual element.
- [ ] **F6 · Personal playfulness.** Replace the removed "dev UI" playfulness with something only this site has (snowflake motif, a Wyn pet, a nod to teaching).
- [ ] **F7 · Credibility strip.** Reconsider showing the two books (`showPublications`) as a small credibility strip rather than a full section (§9 currently: hidden).
- [ ] **F8 · Expose case-study deliverables by default (`CaseStudyCard.tsx`).** Show key deliverables and testing proof without hiding them behind a collapsed `<details>` toggle—especially on NDA cards where the visual is abstract and collapsing leaves only a one-line summary visible on first scan.
- [ ] **F9 · Unify screenshot Lightbox & aspect ratios (`CaseStudyCard.tsx`, `Projects.tsx`).** Wire `Lightbox` click-to-zoom onto public case-study screenshots (_Bersama Jaya_, _MidHub.id_) to match `Projects`, and align `ProjectCard` (`16:9`) with `CaseStudyCard` (`16:10`) so taller screenshots like `disc-personality-test.png` are not over-cropped.
- [ ] **F10 · Fix nav active-state & mobile Hero overflow (`useActiveSection.ts`, `App.tsx`, `Hero.tsx`).** Observe `#contact` (or stop triggering `atBottom` for `projects`) so scrolling to Contact doesn't highlight **Projects** as active in the navbar. Also add `min-w-0` on the Hero grid text column and remove `whitespace-nowrap` on the headline (which currently forces the grid track past 390 px, causing `<section className="overflow-hidden">` to clip the right edge of the hero intro, buttons, and stats on mobile), and remove the duplicate `sm:-right-6 sm:-right-12` class on `Hero.tsx`.
- [ ] **F11 · Post-merge cleanup (`globals.css`, `TODO.md`).** Either use `--signal` / `--signal-soft` intentionally for one restrained emphasis or remove the unused tokens from `globals.css`; delete or archive the stale root `TODO.md` (its pre-merge items like `resume.pdf`, `About.tsx`, and availability wording conflict with §9 and are already reconciled into §12).

### 13.5 Second-opinion comparison (2026-11-20)

- **Convergence:** Both reviews independently identified the same core template tells—Hero prompt + typewriter + orbiting chips + marquee (`T1`), identical six-section chrome + `.spotlight` + hollow numerals (`T2`/`T6`), weak NDA wireframe cards (`T3`), agency-style `Services` + `Process` (`T4`), and the performative `⌘K` palette (`T5`).
- **Copy & positioning (`C1–C6`):** The earlier §13 review adds an explicit LLM-copy audit (`"X, not Y"` phrasing, stock templates, unverifiable vanity stats) and surfaces the strongest real hook: building and testing production systems _and_ teaching software testing/Scrum at BINUS.
- **Technical root causes (`F8–F11`):** Added code-level fixes uncovered in the post-merge audit—collapsed NDA `<details>`, missing Lightbox / mismatched `16:9` vs `16:10` crop on screenshots, `#contact` highlighting `Projects` via `useActiveSection`'s `atBottom` branch, and the real CSS Grid `min-w-0` + `whitespace-nowrap` bug behind the 390 px mobile right-edge clip.

### 13.6 Three-way review outcome (2026-11-20)

Claude, Gemini and Codex discussed §13 and [docs/portfolio-improvement-proposal.md](docs/portfolio-improvement-proposal.md) over three rounds in [docs/three-way-review.md](docs/three-way-review.md). All 25 items were agreed; none were contested. Summary:

- **PR 0, safety:** the leak guard is off today. `reference/forbidden.txt` is missing and the pre-push hook isn't active (`core.hooksPath` is unset). Kelvin restores the private files; the script fails locally when the list is missing.
- **PR 1, fixes:** live browser check after deploy; accessible screenshot dialog on all screenshots; nav highlight at Contact; hero overflow at 320/390 px; mobile header CTA.
- **PR 2, de-template UI:** remove ⌘K, typing headline, chips, marquee, numerals and spotlight; snowflake as the one signature; get JS back under 90 KB (93.95 KB with the books on).
- **PR 3, copy:** fixed headline ("I build and test business software." draft), "8+ years" plus the teaching line, copy pass, JSON-LD `Book` entries.
- **PR 4, work and structure:** three featured cases (Bersama Jaya, hospital asset management, DocFlow), text-led NDA cards with evidence on the face, anchors, Services + Process merged, compact Stack, the books as a slim band before Contact with no nav item.

Kelvin approved K1–K5 and K7 on 2026-11-20. All five PRs are implemented as separate commits on branch `v3.1-de-template`. Initial JS went from 94.10 KB to 87.72 KB gzipped. Still open: K6, restoring `reference/forbidden.txt` and `reference/clients.md`. The leak guard now refuses to pass without them, so nothing can be pushed until they're back.
