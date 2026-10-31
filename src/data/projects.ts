import { ScanSearch, ScanText, Soup, Telescope, Wallet, type LucideIcon } from 'lucide-react'
import maker360 from '@/assets/projects/360-maker.jpg?picture'
import wynState from '@/assets/projects/wyn-state.png?picture'
import wyndoku from '@/assets/projects/wyndoku.png?picture'
import wyntabi from '@/assets/projects/wyntabi.png?picture'

/**
 * Side projects and internal tools (the "Projects" section). Client work lives in work.ts.
 * Give each project a 16:10 screenshot imported with `?picture`, or an `icon` instead.
 */

export type ProjectLink = { kind: 'live' | 'source'; href: string }

export type Project = {
  slug: string
  title: string
  /** Short context label, e.g. "Side project" or "BINUS SLC". */
  context: string
  description: string
  tech: string[]
  links: ProjectLink[]
  image?: ImagePicture
  icon?: LucideIcon
}

export const projects: Project[] = [
  {
    slug: 'plagion',
    title: 'Plagion',
    context: 'BINUS SLC',
    description:
      'AI plagiarism and AI-content checker for programming assignments: AST, control-flow and embedding analysis for Java, Python, JavaScript, C/C++ and more, with PDF evidence reports.',
    tech: ['SvelteKit', 'Spring Boot', 'PyTorch', 'PostgreSQL'],
    icon: ScanSearch,
    links: [],
  },
  {
    slug: 'docflow',
    title: 'DocFlow',
    context: 'BINUS graduation division',
    description:
      'OCRs, sorts and files graduation documents by itself, then tracks bundles through approvals with QR codes. 48 of 48 scans filed correctly in 95 seconds.',
    tech: ['Python', 'Tesseract', 'NestJS', 'Prisma'],
    icon: ScanText,
    links: [],
  },
  {
    slug: 'celestview',
    title: 'Celestview',
    context: 'BINUS SLC',
    description:
      '360° performance reviews and promotion scheduling for lab assistants, with AI-summarised KPIs for side-by-side comparison.',
    tech: ['React Router', 'NestJS', 'Prisma', 'Gemini'],
    icon: Telescope,
    links: [],
  },
  {
    slug: 'satu-gizi',
    title: 'SATU-GIZI',
    context: 'Hackathon',
    description:
      'Platform for Indonesia’s free school-meals programme: vendor licensing, procurement, menus and distribution. 171 API endpoints, 34-page dashboard.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Solidity'],
    icon: Soup,
    links: [],
  },
  {
    slug: 'wyndoku',
    title: 'Wyndoku',
    context: 'Side project',
    description:
      'Daily colour-region logic puzzle with step-by-step hints, Blitz and Versus modes, and a colour-blind-friendly palette.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vitest'],
    image: wyndoku,
    links: [{ kind: 'live', href: 'https://wyndoku.vercel.app/' }],
  },
  {
    slug: 'wyn-state',
    title: 'Wyn State',
    context: 'Side project',
    description:
      'Real-time territory strategy game with 55 collectible pets, 20 stages, daily missions and friend battles.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vitest'],
    image: wynState,
    links: [{ kind: 'live', href: 'https://wyn-state.vercel.app/' }],
  },
  {
    slug: 'wyntabi',
    title: 'Wyntabi',
    context: 'Side project',
    description:
      'Travel Japanese built around real scenes (konbini, onsen, Shinkansen) with spaced-repetition reviews.',
    tech: ['React', 'Supabase'],
    image: wyntabi,
    links: [{ kind: 'live', href: 'https://wyntabi.vercel.app/' }],
  },
  {
    slug: 'wyn-fin',
    title: 'Wyn Fin',
    context: 'Side project',
    description:
      'Personal finance tracker: budgets, categories and period reports behind JWT auth and a rate-limited API.',
    tech: ['React Router', 'NestJS', 'Prisma', 'PostgreSQL'],
    icon: Wallet,
    links: [
      { kind: 'live', href: 'https://winfin.vercel.app/' },
      { kind: 'source', href: 'https://github.com/kelvinice/wyn-fin-frontend' },
    ],
  },
  {
    slug: '360-maker',
    title: '360 Maker',
    context: 'Side project',
    description: 'Build 360° room tours that anyone can explore right in the browser.',
    tech: ['React', 'TypeScript', 'Photo Sphere Viewer'],
    image: maker360,
    links: [
      { kind: 'live', href: 'https://360maker.vercel.app/' },
      { kind: 'source', href: 'https://github.com/kelvinice/360maker-vite' },
    ],
  },
]
