import buildingBetterOop from '@/assets/books/building-better-oop.jpg?picture'
import riseOfAgenticIntelligence from '@/assets/books/rise-of-agentic-intelligence.jpg?picture'

/**
 * Books and papers, newest first. Covers go in src/assets/books/ (imported with `?picture`).
 *
 * The Books section is hidden for now; flip `showPublications` to bring it (and its nav item) back.
 */
export const showPublications = false

export type Publication = {
  title: string
  subtitle?: string
  authors: string[]
  /** Free text, e.g. "May 2026". */
  date: string
  language: string
  isbn?: string
  description: string
  cover: ImagePicture
  href: string
}

export const publications: Publication[] = [
  {
    title: 'The Rise of Agentic Intelligence',
    subtitle: 'Transformasi Menuju Kecerdasan Otonom di Era Kecerdasan Buatan Modern',
    authors: ['Marvin Luckianto', 'Kelvin', 'Yesun Utomo'],
    date: 'Jun 2026',
    language: 'Bahasa Indonesia',
    isbn: '9786347017376',
    description:
      'How AI is shifting from reactive and generative systems to agentic AI that sets its own goals, plans and adapts. It traces the path from symbolic AI to large language models, breaks down what agents are made of (planning, reasoning, memory, learning and tool use), works through case studies in e-commerce, finance, healthcare, IT and industrial automation, and weighs the privacy, security and ethical questions that autonomy raises.',
    cover: riseOfAgenticIntelligence,
    href: 'https://play.google.com/store/books/details?id=FsLvEQAAQBAJ',
  },
  {
    title: 'Building Better Object-Oriented Software',
    authors: ['Kelvin', 'Yesun Utomo'],
    date: 'May 2026',
    language: 'English',
    isbn: '9786347017307',
    description:
      'A bridge from OOP theory to professional practice: the four pillars, the SOLID principles, an architect’s toolbox of design patterns, and an e-commerce shopping-cart case study that turns a monolithic “God Class” into a clean, modular system. It ends with real-world techniques like refactoring legacy code and dependency injection.',
    cover: buildingBetterOop,
    href: 'https://play.google.com/store/books/details?id=rMPvEQAAQBAJ',
  },
]
