import {
  AudioLines,
  Fish,
  Palette,
  ScanSearch,
  ScanText,
  Soup,
  Telescope,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import aCareLauncher from '@/assets/projects/a-care-launcher.png?picture'
import bluejackpunk from '@/assets/projects/bluejackpunk.jpg?picture'
import mamikosClone from '@/assets/projects/mamikos-clone.png?picture'
import maker360 from '@/assets/projects/360-maker.jpg?picture'
import wynState from '@/assets/projects/wyn-state.png?picture'
import wyndoku from '@/assets/projects/wyndoku.png?picture'
import wyntabi from '@/assets/projects/wyntabi.png?picture'

/**
 * Project cards. To add one:
 *   1. drop a 16:10-ish screenshot in src/assets/projects/ and import it with `?picture`,
 *      or skip the screenshot and give the project a generated `cover` instead
 *   2. add an entry below (order = display order)
 */

export type ProjectCategory = 'game' | 'app' | 'tool'
export type Tone = 'ice' | 'pink' | 'gold' | 'lime'

export type ProjectLink = {
  kind: 'play' | 'demo' | 'source' | 'frontend' | 'backend' | 'reference'
  href: string
}

/** Generated cover art for projects without a screenshot. */
export type ProjectCover = {
  tone: Tone
  icon?: LucideIcon
  /** LPC-format character spritesheets (64px frames); the front-facing frame is shown. */
  sprites?: string[]
}

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  tech: string[]
  links: ProjectLink[]
  image?: ImagePicture
  cover?: ProjectCover
  /** Shown as a ★ badge, e.g. "New". */
  featured?: boolean
  /** Small status label, e.g. "Prototype" or "Hackathon". */
  badge?: string
}

export const categoryLabels: Record<ProjectCategory, string> = {
  game: 'Games',
  app: 'Apps',
  tool: 'Tools',
}

export const projects: Project[] = [
  // ── The Wyn family ────────────────────────────────────────────────────────
  {
    slug: 'wyndoku',
    title: 'Wyndoku',
    category: 'game',
    featured: true,
    description:
      'A colour-region logic puzzle with pets: one per colour, row and column, and no two may touch. A new daily puzzle, levels that grow bigger and trickier, a hint button that walks you through the next step, Blitz and Versus races against friends, and a colour-blind-friendly palette.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vitest'],
    image: wyndoku,
    links: [{ kind: 'play', href: 'https://wyndoku.vercel.app/' }],
  },
  {
    slug: 'wyn-state',
    title: 'Wyn State',
    category: 'game',
    featured: true,
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
    featured: true,
    description:
      'Japanese for the trip: what staff say to you and what to say back, built around real scenes like the konbini, onsen and Shinkansen. About fifteen minutes a day, with spaced-repetition reviews, streaks and guest or Google sign-in.',
    tech: ['React', 'Motion', 'Supabase'],
    image: wyntabi,
    links: [{ kind: 'demo', href: 'https://wyntabi.vercel.app/' }],
  },
  {
    slug: 'wyn-reel',
    title: 'Wyn Reel',
    category: 'game',
    badge: 'Prototype',
    description:
      'The next Wyn game: a cosy, turn-based fishing tactics game for phones. Chiko the Pomeranian sails a chart of islands, strikes on a bouncing bar, fights each fish with tackle cards and packs the catch into a block-grid hold.',
    tech: ['React', 'TypeScript', 'PixiJS', 'Vitest'],
    cover: { tone: 'ice', icon: Fish },
    links: [],
  },

  // ── Platforms & tools ─────────────────────────────────────────────────────
  {
    slug: 'satu-gizi',
    title: 'SATU-GIZI',
    category: 'app',
    badge: 'Hackathon',
    description:
      'A platform for Indonesia’s free school-meals programme: vendor licensing, procurement, kitchen checklists, menu and nutrition planning, distribution tracking and a map of schools, with key records anchored on-chain. NestJS API with 171 endpoints, a 34-page React dashboard and 4 smart contracts on Polygon Amoy.',
    tech: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Solidity', 'Leaflet'],
    cover: { tone: 'lime', icon: Soup },
    links: [],
  },
  {
    slug: 'plagion',
    title: 'Plagion',
    category: 'tool',
    description:
      'An AI-powered plagiarism and AI-content checker for a university software lab. A winnowing prefilter narrows the candidate pairs, then AST, control-flow and embedding analysis scores code in Java, Python, JavaScript, C/C++, HTML, CSS and Jupyter notebooks, and a DetectGPT-style detector flags AI-written text. Batch runs, highlighted evidence and PDF reports; the method is written up as a paper.',
    tech: ['SvelteKit', 'Spring Boot', 'Python', 'PyTorch', 'tree-sitter', 'PostgreSQL'],
    cover: { tone: 'pink', icon: ScanSearch },
    links: [],
  },
  {
    slug: 'docflow',
    title: 'DocFlow',
    category: 'tool',
    badge: 'BINUS',
    description:
      'Built for BINUS University’s graduation division to automate document sorting. A Windows scanner app OCRs each graduation document, makes the PDF searchable, reads the student ID and files it by itself, while the DocFlow web app tracks document bundles through approvals with QR codes, yudisium lists and reports. Acceptance run: 48 of 48 scans filed correctly in 95 seconds.',
    tech: ['Python', 'Tesseract OCR', 'NestJS', 'Prisma', 'PostgreSQL', 'React Router'],
    cover: { tone: 'gold', icon: ScanText },
    links: [],
  },
  {
    slug: 'celestview',
    title: 'Celestview',
    category: 'app',
    description:
      '360° performance reviews and promotion scheduling for lab assistants. It syncs assistants and semesters from the lab’s systems, collects review notes, and summarises each person’s KPIs with Gemini or OpenAI so leads can compare candidates side by side.',
    tech: ['React Router', 'TanStack Query', 'NestJS', 'Prisma', 'Gemini', 'OpenAI'],
    cover: { tone: 'ice', icon: Telescope },
    links: [],
  },
  {
    slug: 'wyn-fin',
    title: 'Wyn Fin',
    category: 'app',
    description:
      'A personal finance tracker: budgets, expenses, categories and period-based reports behind JWT auth, with a rate-limited NestJS API.',
    tech: ['React Router', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
    cover: { tone: 'lime', icon: Wallet },
    links: [{ kind: 'source', href: 'https://github.com/kelvinice/wyn-fin-frontend' }],
  },
  {
    slug: 'only-arts',
    title: 'OnlyArts',
    category: 'app',
    description:
      'A Web3 art platform: artists mint and sell their work as NFTs from an artist studio, while collectors explore, search, follow, comment and keep collections, all signed in with a crypto wallet. NestJS + Prisma API behind it for feeds, notifications and purchases.',
    tech: ['React Router', 'wagmi', 'RainbowKit', 'NestJS', 'Prisma', 'PostgreSQL'],
    cover: { tone: 'pink', icon: Palette },
    links: [],
  },
  {
    slug: '360-maker',
    title: '360 Maker',
    category: 'tool',
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
    description:
      'A small order manager for group catering: a buyer matrix, individual orders, payments and saved buyer profiles, with Excel export.',
    tech: ['React Router', 'Tailwind CSS', 'DaisyUI', 'SheetJS'],
    cover: { tone: 'gold', icon: UtensilsCrossed },
    links: [{ kind: 'source', href: 'https://github.com/kelvinice/catering-calculator-app' }],
  },

  // ── Canvas games (hosted on this site, see apps/) ─────────────────────────
  {
    slug: 'bluejackpunk',
    title: 'Bluejackpunk',
    category: 'game',
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
    description:
      'A top-down labyrinth shooter: aim with the mouse and fight through slimes, skeletons, coloured switches and a boss.',
    tech: ['JavaScript', 'HTML Canvas'],
    cover: { tone: 'lime', sprites: ['/kelabyrinth/assets/images/player.png'] },
    links: [{ kind: 'play', href: '/kelabyrinth/' }],
  },
  {
    slug: 'spyfamily',
    title: 'Spy Family',
    category: 'game',
    description:
      'A canvas action game inspired by Spy × Family. Pick a character (spy, assassin or esper), each with its own skills and energy, and fight your way to the exit.',
    tech: ['JavaScript', 'HTML Canvas'],
    cover: {
      tone: 'pink',
      sprites: [
        '/spyfamily/assets/images/player1.png',
        '/spyfamily/assets/images/player2.png',
        '/spyfamily/assets/images/player3.png',
      ],
    },
    links: [{ kind: 'play', href: '/spyfamily/' }],
  },
  {
    slug: 'mamikos-clone',
    title: 'Mamikos (clone)',
    category: 'app',
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
    description:
      'A desktop GUI for juggling audio devices: see inputs and outputs side by side and map hotkeys to common actions.',
    tech: ['Python'],
    cover: { tone: 'ice', icon: AudioLines },
    links: [{ kind: 'source', href: 'https://github.com/kelvinice/ice-audio-manager' }],
  },
]
