# kelvinice.github.io: v3 "Professional" Rework Plan

Status: **Ready to implement (2026-10-31).** All blocking questions are answered (§9). The items left in §10 are optional details with defaults.
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

| Key      | Public label (draft)                                         | What Kelvin did                                                                                                             | Stack (known)        | Named?                            |
| -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------- |
| BJ       | **Bersama Jaya Bordir Studio**, embroidery workshop, Jakarta | Company website **+ CMS + ERP**; public site has a price calculator and lead form                                           | Next.js (+ ?)        | Yes, links bersamajaya.vercel.app |
| MidHub   | **MidHub.id**, heavy-equipment marketplace                   | **Backend engineer** on the core modules: **product listings**, **premium** (membership/promoted listings) and **payments** | ? (frontend Next.js) | Yes, links midhub.id              |
| Client A | "A multinational automotive manufacturer in Indonesia" ✔     | **HRIS** + **e-Tender / procurement system**                                                                                | ?                    | No                                |
| Client B | "An automotive retail & distribution group"                  | **ERP**: developed and maintained core backend features                                                                     | Laravel              | No                                |
| Client C | "An energy company"                                          | **Maintained & enhanced** their corporate website/CMS, including statistical reporting                                      | CodeIgniter          | No                                |
| Client D | "A large state-owned enterprise" ✔                           | **KPI dashboard**: real-time performance and job monitoring                                                                 | Laravel              | No                                |
| HAM      | "Multi-hospital asset management platform"                   | **Led backend**: dynamic RBAC; calibration, maintenance, inspection and lifecycle workflows; Jest suites                    | NestJS, Jest         | Generic already                   |
| IoT      | "Hospital tool monitoring & RFID infant tracking"            | Real-time tracking systems                                                                                                  | ?                    | Generic already                   |

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

- **Mood:** calm, engineered, trustworthy, in the spirit of Linear / Vercel / Stripe. Lots of whitespace, strong type, one accent.
- **Palette:** neutral slate/zinc base with one cool "ice" blue accent (e.g. `#0ea5e9` / `#3b82f6`). Dark and light themes following the system setting, with the choice remembered.
- **Type:** _Inter_ or _Geist_ for text, _Geist Mono_ / _JetBrains Mono_ for labels and stack tags.
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

- Initial JS **≤ 90 KB gzipped** (v2: 135 KB).
- Lighthouse ≥ 95 in all four categories; LCP < 1.5 s on desktop.
- `/game/` costs 0 bytes on the main page.

### SEO / meta

- Title: "Kelvin, Software Engineer · Full-stack Web Developer (Jakarta)".
- Description aimed at clients: "Freelance full-stack developer in Jakarta building ERP, CMS, HRIS and dashboards…".
- New OG image; JSON-LD `Person` with `jobTitle: "Software Engineer"`, `knowsAbout` [ERP, CMS, HRIS, Scrum, Laravel, NestJS, React, Test automation], plus `alumniOf` BINUS.
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

---

## 10. Optional details (defaults apply if unanswered)

| #   | Item                                                               | Default if no answer                                                                                                               |
| --- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Bersama Jaya: admin/ERP screenshot with dummy data? CMS/ERP stack? | Public-site screenshot only; stack shown as "Next.js · CMS · ERP"                                                                  |
| 2   | Client A: stack, your role, main modules                           | "Full-stack developer"; modules: employee data, leave/attendance, vendor registration, tender bidding & evaluation (edit if wrong) |
| 3   | MidHub: backend stack and rough period                             | Stack line omitted; no dates (consistent with "keep it flexible")                                                                  |
| 4   | Hospital asset management: same client as v2's A-care Launcher?    | Treated as separate, both anonymous                                                                                                |
| 5   | Headline "Software Engineer · Full-stack Web Developer"            | Used as written                                                                                                                    |
