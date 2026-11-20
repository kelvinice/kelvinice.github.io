import { Fish, type LucideIcon } from 'lucide-react'
import aCareLauncher from '@/assets/projects/a-care-launcher.png?picture'
import bluejackpunk from '@/assets/projects/bluejackpunk.jpg?picture'
import discPersonalityTest from '@/assets/projects/disc-personality-test.png?picture'
import docflow from '@/assets/projects/docflow.png?picture'
import mamikosClone from '@/assets/projects/mamikos-clone.png?picture'
import maker360 from '@/assets/projects/360-maker.jpg?picture'
import plagion from '@/assets/projects/plagion.png?picture'
import wynState from '@/assets/projects/wyn-state.png?picture'
import wyndoku from '@/assets/projects/wyndoku.png?picture'
import wyntabi from '@/assets/projects/wyntabi.png?picture'

/**
 * Portfolio projects organised by display tier:
 *   - featured: alternating editorial case-study rows with framed screenshots
 *   - arcade:   compact cartridge shelf for hosted/in-progress games
 *   - archive:  scannable indexed entries for supporting platforms & utilities
 */

export type ProjectCategory = 'game' | 'app' | 'tool'
export type ProjectTier = 'featured' | 'arcade' | 'archive'

export type ProjectLink = {
  kind: 'play' | 'demo' | 'source' | 'frontend' | 'backend' | 'reference'
  href: string
}

/** Cover visuals for arcade items without a full screenshot. */
export type ProjectCover = {
  icon?: LucideIcon
  /** LPC-format character spritesheets (64px frames); the front-facing frame is shown. */
  sprites?: string[]
}

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  tier: ProjectTier
  description: string
  /** Concise outcome or capability callout shown in featured rows and hero showcase. */
  highlight?: string
  tech: string[]
  links: ProjectLink[]
  image?: ImagePicture
  cover?: ProjectCover
  featured?: boolean
  badge?: string
}

export const categoryLabels: Record<ProjectCategory, string> = {
  game: 'Games',
  app: 'Apps',
  tool: 'Tools',
}

export const projects: Project[] = [
  // ── Featured case studies ─────────────────────────────────────────────────
  {
    slug: 'wyndoku',
    title: 'Wyndoku',
    category: 'game',
    tier: 'featured',
    featured: true,
    highlight: 'Daily puzzles · Blitz & Versus races · colour-blind palette',
    description:
      'A colour-region logic puzzle with pets: one per colour, row and column, and no two may touch. A new daily puzzle, levels that grow bigger and trickier, a hint button that walks you through the next step, Blitz and Versus races against friends, and a colour-blind-friendly palette.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vitest'],
    image: wyndoku,
    links: [{ kind: 'play', href: 'https://wyndoku.vercel.app/' }],
  },
  {
    slug: 'plagion',
    title: 'Plagion',
    category: 'tool',
    tier: 'featured',
    badge: 'BINUS SLC',
    highlight: 'Winnowing + tree-sitter AST + DetectGPT · batch PDF reports',
    description:
      'An AI-powered plagiarism and AI-content checker built for BINUS University’s Software Laboratory Center (SLC). A winnowing prefilter narrows the candidate pairs, then AST, control-flow and embedding analysis scores code in Java, Python, JavaScript, C/C++, HTML, CSS and Jupyter notebooks, and a DetectGPT-style detector flags AI-written text. Batch runs, highlighted evidence and PDF reports; the method is written up as a paper.',
    tech: ['SvelteKit', 'Spring Boot', 'Python', 'PyTorch', 'tree-sitter', 'PostgreSQL'],
    image: plagion,
    links: [],
  },
  {
    slug: 'docflow',
    title: 'DocFlow',
    category: 'tool',
    tier: 'featured',
    badge: 'BINUS',
    highlight: '48/48 scans filed in 95s · OCR + QR bundle approvals',
    description:
      'Built for BINUS University’s graduation division to automate document sorting. A Windows scanner app OCRs each graduation document, makes the PDF searchable, reads the student ID and files it by itself, while the DocFlow web app tracks document bundles through approvals with QR codes, yudisium lists and reports. Acceptance run: 48 of 48 scans filed correctly in 95 seconds.',
    tech: ['Python', 'Tesseract OCR', 'NestJS', 'Prisma', 'PostgreSQL', 'React Router'],
    image: docflow,
    links: [],
  },
  {
    slug: 'wyn-state',
    title: 'Wyn State',
    category: 'game',
    tier: 'featured',
    featured: true,
    highlight: '55 collectible pets · 20 stages · real-time map tactics',
    description:
      'Real-time territory strategy: send troops between regions, dodge tower fire and take the map. Collect 55 pets from around the world, each with its own skills, then fight through 20 stages, daily missions and battles with friends.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vitest'],
    image: wynState,
    links: [{ kind: 'play', href: 'https://wyn-state.vercel.app/' }],
  },
  {
    slug: 'wyntabi',
    title: 'Wyntabi',
    category: 'app',
    tier: 'featured',
    featured: true,
    highlight: 'Real travel scenes · spaced repetition · ~15 min/day',
    description:
      'Japanese for the trip: what staff say to you and what to say back, built around real scenes like the konbini, onsen and Shinkansen. About fifteen minutes a day, with spaced-repetition reviews, streaks and guest or Google sign-in.',
    tech: ['React', 'Motion', 'Supabase'],
    image: wyntabi,
    links: [{ kind: 'demo', href: 'https://wyntabi.vercel.app/' }],
  },

  // ── Playable arcade & prototypes ──────────────────────────────────────────
  {
    slug: 'bluejackpunk',
    title: 'Bluejackpunk',
    category: 'game',
    tier: 'arcade',
    description:
      'A cyberpunk match-3 game written from scratch on HTML Canvas. Enter your name, pick a tile size and chase the high score.',
    tech: ['JavaScript', 'HTML Canvas'],
    image: bluejackpunk,
    links: [{ kind: 'play', href: '/bluejackpunk/' }],
  },
  {
    slug: 'kelabyrinth',
    title: 'Kelabyrinth',
    category: 'game',
    tier: 'arcade',
    description:
      'A top-down labyrinth shooter: aim with the mouse and fight through slimes, skeletons, coloured switches and a boss.',
    tech: ['JavaScript', 'HTML Canvas'],
    cover: { sprites: ['/kelabyrinth/assets/images/player.png'] },
    links: [{ kind: 'play', href: '/kelabyrinth/' }],
  },
  {
    slug: 'spyfamily',
    title: 'Spy Family',
    category: 'game',
    tier: 'arcade',
    description:
      'A canvas action game inspired by Spy × Family. Pick a character (spy, assassin or esper), each with its own skills and energy, and fight your way to the exit.',
    tech: ['JavaScript', 'HTML Canvas'],
    cover: {
      sprites: [
        '/spyfamily/assets/images/player1.png',
        '/spyfamily/assets/images/player2.png',
        '/spyfamily/assets/images/player3.png',
      ],
    },
    links: [{ kind: 'play', href: '/spyfamily/' }],
  },
  {
    slug: 'wyn-reel',
    title: 'Wyn Reel',
    category: 'game',
    tier: 'arcade',
    badge: 'Prototype',
    description:
      'The next Wyn game: a cosy, turn-based fishing tactics game for phones. Chiko the Pomeranian sails a chart of islands, strikes on a bouncing bar, fights each fish with tackle cards and packs the catch into a block-grid hold.',
    tech: ['React', 'TypeScript', 'PixiJS', 'Vitest'],
    cover: { icon: Fish },
    links: [],
  },

  // ── Archive index ─────────────────────────────────────────────────────────
  {
    slug: 'satu-gizi',
    title: 'SATU-GIZI',
    category: 'app',
    tier: 'archive',
    badge: 'Hackathon',
    highlight: '171 NestJS endpoints · 34-page dashboard · 4 Polygon contracts',
    description:
      'A platform for Indonesia’s free school-meals programme: vendor licensing, procurement, kitchen checklists, menu and nutrition planning, distribution tracking and a map of schools, with key records anchored on-chain.',
    tech: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Solidity', 'Leaflet'],
    links: [],
  },
  {
    slug: 'celestview',
    title: 'Celestview',
    category: 'app',
    tier: 'archive',
    badge: 'BINUS SLC',
    highlight: '360° assistant reviews · Gemini & OpenAI KPI summaries',
    description:
      '360° performance reviews and promotion scheduling for the lab assistants of BINUS SLC. Syncs assistants and semesters from internal lab systems, collects review notes, and summarises KPIs so leads can compare candidates side by side.',
    tech: ['React Router', 'TanStack Query', 'NestJS', 'Prisma', 'Gemini', 'OpenAI'],
    links: [],
  },
  {
    slug: 'disc-personality-test',
    title: 'DISC Personality Test',
    category: 'tool',
    tier: 'archive',
    badge: 'BINUS SLC',
    highlight: 'D/I/S/C scoring across Current, Pressure & Self profiles · report generation',
    description:
      'Internal DISC behavioural assessment and personality test web app built with the BINUS Software Laboratory Center (SLC) R&D team. Computes timed response scores across X/Y/Z/R balance tables, visualises Current, Pressure and Self behaviour profiles across D, I, S and C dimensions, and generates downloadable personality reports.',
    // TODO(kelvin): update tech tags if needed (e.g. .NET / PHP / Highcharts).
    tech: ['JavaScript', 'Web App'],
    image: discPersonalityTest,
    links: [],
  },
  {
    slug: 'wyn-fin',
    title: 'Wyn Fin',
    category: 'app',
    tier: 'archive',
    description:
      'A personal finance tracker: budgets, expenses, categories and period-based reports behind JWT auth, with a rate-limited NestJS API.',
    tech: ['React Router', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
    links: [
      { kind: 'demo', href: 'https://winfin.vercel.app/' },
      { kind: 'source', href: 'https://github.com/kelvinice/wyn-fin-frontend' },
    ],
  },
  {
    slug: 'only-arts',
    title: 'OnlyArts',
    category: 'app',
    tier: 'archive',
    description:
      'A Web3 art platform: artists mint and sell their work as NFTs from an artist studio, while collectors explore, search, follow, comment and keep collections with wallet sign-in and a NestJS + Prisma API.',
    tech: ['React Router', 'wagmi', 'RainbowKit', 'NestJS', 'Prisma', 'PostgreSQL'],
    links: [],
  },
  {
    slug: '360-maker',
    title: '360 Maker',
    category: 'tool',
    tier: 'archive',
    description:
      'A tool for creating 360° room tours that you can explore right in the browser. Built on photo-sphere-viewer.',
    tech: ['React', 'TypeScript', 'Vite', 'Photo Sphere Viewer'],
    image: maker360,
    links: [
      { kind: 'demo', href: 'https://360maker.vercel.app/' },
      { kind: 'source', href: 'https://github.com/kelvinice/360maker-vite' },
    ],
  },
  {
    slug: 'a-care-launcher',
    title: 'A-care Launcher',
    category: 'app',
    tier: 'archive',
    description:
      'Launcher management web app for hospitals: manages devices, menus, profiling, nurse-call configuration and the API gateway.',
    tech: ['React', 'React Router'],
    image: aCareLauncher,
    links: [],
  },
  {
    slug: 'catering-order-manager',
    title: 'Catering Orders',
    category: 'tool',
    tier: 'archive',
    description:
      'A small order manager for group catering: a buyer matrix, individual orders, payments and saved buyer profiles, with Excel export.',
    tech: ['React Router', 'Tailwind CSS', 'DaisyUI', 'SheetJS'],
    links: [{ kind: 'source', href: 'https://github.com/kelvinice/catering-calculator-app' }],
  },
  {
    slug: 'mamikos-clone',
    title: 'Mamikos (clone)',
    category: 'app',
    tier: 'archive',
    description:
      'A full-stack clone of Mamikos, the Indonesian site for finding apartments and boarding houses, with separate front-end and API projects.',
    tech: ['JavaScript'],
    image: mamikosClone,
    links: [
      { kind: 'frontend', href: 'https://github.com/kelvinice/tpaweb' },
      { kind: 'backend', href: 'https://github.com/kelvinice/tpaapi' },
      { kind: 'reference', href: 'https://mamikos.com/' },
    ],
  },
  {
    slug: 'ice-audio-manager',
    title: 'Ice Audio Manager',
    category: 'tool',
    tier: 'archive',
    description:
      'A desktop GUI for juggling audio devices: see inputs and outputs side by side and map hotkeys to common actions.',
    tech: ['Python'],
    links: [{ kind: 'source', href: 'https://github.com/kelvinice/ice-audio-manager' }],
  },
]
