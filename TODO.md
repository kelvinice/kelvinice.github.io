# Portfolio Improvement TODO

Actionable roadmap for evolving **kelvinice.github.io** into a distinct, high-craft portfolio with authentic visual personality, real product media, and polished UX.

---

## 1. UI Revamp — Editorial Technical Notebook × Tactile Indie Studio

Goal: replace the generic dark-navy + neon cyan/pink synthwave template look, uniform card grids, and forced RPG labels with an intentional **Editorial Technical Notebook × Tactile Indie Studio** aesthetic—defaulting to **Frost Paper (Light)** with an **Obsidian Slate (Dark)** toggle.

### Phase 1 — Visual System & Typography Reset

- [x] **Overhaul color tokens (`src/styles/globals.css`)**:
  - Replaced the dark-navy + neon cyan/pink/gold/lime palette with **Frost Paper (Light default)** (`#f6f7f9` canvas, `#ffffff` surface, `#11161f` ink, `#026aa2` glacial blue accent, `#c94624` vermilion signal) and **Obsidian Slate (Dark)** (`#0e1116` canvas, `#171d27` surface, `#edf1f7` ink, `#6bc5ff` accent, `#f07148` coral signal).
- [x] **Upgrade typography**:
  - Retired `Press Start 2P`, `Space Grotesk`, and `JetBrains Mono`.
  - Adopted **Bricolage Grotesque Variable** (display headings), **IBM Plex Sans** (body/UI), and **IBM Plex Mono** (technical metadata, dates, ISBNs, stack tags).
- [x] **Replace template surface chrome**:
  - Replaced `pixel-box` (`3px` borders + `6px` hard shadows), `text-glow`, and `scanlines` with `1px` architectural hairlines, gallery-matted screenshot frames, and crisp hover states.
  - Reserved pixel aesthetics strictly for `PixelSnowflake`, the playable game sprites, and the snow Easter egg.

### Phase 2 — Section-by-Section Layout Remake

- [x] **Navbar (`src/components/Navbar.tsx`)**:
  - Sticky bar with `1px` hairline border, `PixelSnowflake` mark, concise links (`Work`, `Books`, `Experience`, `About`, `Contact`), `ThemeToggle`, optional CV button, and mobile drawer without blinking cursors.
- [x] **Hero (`src/sections/Hero.tsx`)**:
  - Replaced the centered stack, synthwave sun, perspective `grid-floor`, `"Player 1 · ready"` badge, and 4-stat HUD with an asymmetric editorial split and an interactive **Selected work** showcase switcher (_Wyndoku_, _Plagion_, _DocFlow_).
  - Moved `PixelSnow` out of always-on background noise into the opt-in Easter egg.
- [x] **Projects (`src/sections/Projects.tsx`)**:
  - Replaced the flat 18-card wall and generic Lucide-icon placeholders with a 3-tier hierarchy:
    1. **Featured Case Studies** (_Wyndoku_, _Plagion_, _DocFlow_, _Wyn State_, _Wyntabi_) as alternating 2-column feature rows with framed screenshots and highlight callouts.
    2. **Playable Arcade & Prototypes** (_Bluejackpunk_, _Kelabyrinth_, _Spy Family_, _Wyn Reel_) keeping real screenshots and LPC sprites.
    3. **More Projects & Archive** (_SATU-GIZI_, _Celestview_, _Wyn Fin_, _OnlyArts_, _360 Maker_, _A-care Launcher_, _Catering Orders_, _Mamikos (clone)_, _Ice Audio Manager_) as scannable indexed rows with screenshot previews where available.
- [x] **Publications (`src/sections/Publications.tsx`)**:
  - Renamed `"Spellbooks"` to **Books** (`02 — Writing`) with a publisher-style 2-column spread, elevated covers, ISBNs, and Google Play Books links.
- [x] **About & Skills (`src/sections/About.tsx`, `src/sections/Skills.tsx`)**:
  - Replaced `"Select your player"` / `"LV 8"` / `"Class / Guild"` RPG framing with an editorial bio and hairline biographical summary card.
  - Consolidated the 5-group skill grid into a 2×2 **Technical Stack** ledger (`Frontend & Interfaces`, `Backend & Data`, `AI, Automation & Games`, `Tooling & Delivery`) with highlighted daily drivers.
- [x] **Experience (`src/sections/Experience.tsx`)**:
  - Replaced `"Quest log"` dashed cards with a grouped institutional progression ledger (`BINUS University · Aug 2018 — Present`).
- [x] **Contact & Footer (`src/sections/Contact.tsx`, `src/sections/Footer.tsx`)**:
  - Replaced the `"Continue? Insert coin below"` box with a full-width editorial split (direct invite + copyable email on left, structured links on right) and minimal footer retaining the Konami code and 5-click snowflake Easter egg.

### Phase 3 — Motion, Media & Bundle Hygiene

- [x] Removed repetitive `<Reveal>` fade-up animations (`src/components/Reveal.tsx`).
- [x] Removed `motion` and replaced UI transitions with native CSS transitions.
- [x] Added a keyboard-accessible screenshot preview modal (`src/components/Lightbox.tsx`).
- [x] Updated `public/404.html` and `public/favicon.svg` to align with **Frost Paper** / **Obsidian Slate**.
- [ ] Refresh `public/og-image.png` to match the revamped **Frost Paper** visual identity.

---

## 2. Experience & Academic Credibility (What to Add)

- [ ] **Flesh out `src/data/experience.ts` with concrete scope, systems & metrics**:
  - **Academic Development Section Head (Oct 2025 – Present):** state team/section size or scope, key academic/curriculum/tooling initiatives led, and connect directly to shipped campus systems (e.g., _DocFlow_ supporting 7,127+ students and 15,902+ printed graduation documents).
  - **College Lecturer (Aug 2023 – Present):** list specific courses taught (e.g., OOP, Web Development, Software Engineering, AI / Cyber Security), approximate student/cohort scale, and capstone or thesis supervision.
  - **Research & Development Officer (Apr 2022 – Sep 2025) & R&D Staff (Sep 2019 – Apr 2022):** unpack 6 years at BINUS SLC—name flagship internal systems (**Plagion**, **Celestview**, **DISC Personality Test**, lab/exam tooling), quantify users served per semester or manual hours saved, highlight architecture/mentorship ownership, and populate `tech` tags per role.
  - **Teaching Assistant (Aug 2018 – Sep 2019):** add lab/practicum context or standout subjects mentored.
- [ ] **Add Education (`S.Kom.` & `M.Kom.`)**:
  - Add degree titles, institution(s), graduation years, and thesis/research focus (either as a subsection under Experience or inside About).
- [ ] **Expand `Writing` into Books, Papers & Talks**:
  - Add the **Plagion** paper (venue, year, DOI/PDF link once published) plus any other conference/journal publications.
  - Add academic/researcher profile links (**Google Scholar**, **ORCID**, **SINTA**) in `src/data/profile.ts` alongside GitHub and LinkedIn.
  - Add a **Talks, Workshops & Awards** subsection (guest lectures, internal workshops, hackathon recognitions such as **SATU-GIZI**).

---

## 3. Content, Storytelling & Assets (What to Add)

- [x] Add Plagion screenshot (`src/assets/projects/plagion.png`) and wire it into `src/data/projects.ts`.
- [x] Add DocFlow screenshot (`src/assets/projects/docflow.png`) and wire it into `src/data/projects.ts`.
- [x] Add DISC Personality Test screenshot (`src/assets/projects/disc-personality-test.png`) and project entry in `src/data/projects.ts`.
- [ ] **Add multi-screenshot galleries for private BINUS systems**:
  - Visitors cannot sign in to internal apps, so add 2–3 screenshots per flagship tool (e.g., _Plagion_: batch upload + highlighted similarity diff + PDF report; _DocFlow_: Windows OCR scanner + bundle approvals + reporting).
- [ ] **Capture and add single screenshots for remaining projects**:
  - High priority: **Celestview**, **SATU-GIZI**, **Wyn Reel**.
  - Medium priority: **Wyn Fin**, **OnlyArts**.
  - Lower priority: **Catering Orders**, **Ice Audio Manager**.
- [ ] **Add project context metadata (`src/data/projects.ts`)**:
  - Add **role & team size** (e.g., Solo vs. Lead Architect vs. R&D Team) so recruiters/peers know what you built directly.
  - Add **year** tags (`2019`–`2026`) to show technical progression from early Canvas/SLC tools to recent AI/OCR systems and Wyn releases.
  - Confirm/update placeholder `tech` tags (`DISC Personality Test`, `Mamikos (clone)`, `Ice Audio Manager`) and note `Wyn Fin` demo status clearly (frontend-only if backend is offline).
  - Add concise **Problem → Architecture → Outcome** case notes (expandable drawer/modal) for the 5 featured projects (_Wyndoku_, _Plagion_, _DocFlow_, _Wyn State_, _Wyntabi_).
- [ ] **Optional short gameplay / UI clips**:
  - Add 5-second silent looping WebM/GIF previews for _Wyndoku_, _Wyn State_, or _Wyn Reel_ to convey game feel immediately.
- [ ] **Personal voice, identity & availability (`src/data/profile.ts` & `src/sections/Contact.tsx`)**:
  - Replace `src/assets/images/profile.jpg` (currently a snowflake graphic) with a real portrait photo or bespoke editorial avatar.
  - Rewrite `TODO(kelvin)` drafted copy in `src/data/profile.ts` (`bio`) in your own voice bridging educator/author, campus systems engineer, and indie game maker.
  - Add a brief **"Now / Currently building"** note (e.g., _Wyn Reel_, Academic Development initiatives, upcoming research/books) to show active momentum.
  - Clarify **"Open to"** collaboration topics in `src/sections/Contact.tsx` (e.g., research/academic collaboration, technical advisory, workshops/talks, full-stack & AI tooling, indie game projects).
  - Add `public/resume.pdf` and set `resumeUrl: '/resume.pdf'` in `src/data/profile.ts` to enable CV download buttons.
  - Add public links as they become available (Plagion paper URL once published, public repos for _Kelabyrinth_ / _Spy Family_ if any).
- [ ] **Optional engineering notes / short write-ups**:
  - Publish 2–3 short technical post-mortems (e.g., _Plagion's winnowing + tree-sitter + DetectGPT pipeline_, _Automating 15,000+ graduation documents in DocFlow_, _Generating unique daily Wyndoku puzzles_).

---

## 4. UX, Engineering & SEO Improvements

- [x] **Fix active-section scroll highlight (`src/hooks/useActiveSection.ts`)**: handle top-of-page reset and bottom-of-page highlight for `#contact`.
- [x] **URL-synced project filters (`src/sections/Projects.tsx`)**: sync active category filter with `?category=`.
- [x] **Enrich structured data (`index.html`)**: add `knowsAbout` topics to the JSON-LD `Person` schema.
- [ ] Expand JSON-LD in `index.html` further with `Book` publication entries (titles, ISBNs, Google Play URLs) if helpful for search rich results.
- [ ] **Quality & verification pass**:
  - Run Lighthouse audits (mobile & desktop `>= 95` across Performance, Accessibility, Best Practices, SEO) in a live browser.
  - Visually verify Frost Paper (light) & Obsidian Slate (dark) spacing, responsive breakpoints, and WCAG AA contrast.
  - Smoke-test hosted canvas games (`/bluejackpunk/`, `/kelabyrinth/`, `/spyfamily/`).
- [ ] **Repo cleanup**: archive or remove legacy `plan.md` once the revamp is reviewed and shipped.
- [ ] **Optional future enhancements**: dedicated project case-study pages/drawers, privacy-friendly analytics (e.g. GoatCounter or Cloudflare Web Analytics), Playwright smoke tests in `.github/workflows/ci.yml`, and custom domain setup.
