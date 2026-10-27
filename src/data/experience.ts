/**
 * The "quest log" (work history), newest first.
 *
 * Entries with `placeholder: true` only show up in `pnpm dev` (with a PLACEHOLDER badge)
 * and are dropped from production builds, so nothing fake can go live by accident.
 * If no real entries remain, the whole section and its nav link are hidden.
 */

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  /** Free text, e.g. "Jan 2023". Leave both dates out to hide the date line. */
  start?: string
  /** Omit (with a start date) for "Present". */
  end?: string
  location?: string
  highlights: string[]
  tech?: string[]
  placeholder?: boolean
}

const BINUS = { company: 'BINUS University', companyUrl: 'https://binus.ac.id/' }

const entries: Experience[] = [
  {
    role: 'Academic Development Section Head',
    ...BINUS,
    start: 'Oct 2025',
    location: 'Jakarta, Indonesia',
    highlights: [
      'Lead the Academic Development section.',
      'Still a developer at heart: build tools that take manual work off campus teams, like the document automation for the graduation division.',
    ],
  },
  {
    role: 'College Lecturer',
    ...BINUS,
    start: 'Aug 2023',
    location: 'Jakarta, Indonesia',
    highlights: [
      'Teach computer science and software development.',
      'Co-authored two books with colleagues: Building Better Object-Oriented Software and The Rise of Agentic Intelligence.',
    ],
  },
  {
    role: 'Research & Development Officer',
    ...BINUS,
    start: 'Apr 2022',
    end: 'Sep 2025',
    location: 'Indonesia',
    highlights: [
      'Promoted from R&D Staff; built and maintained software for teaching and lab operations.',
    ],
    tech: ['.NET', 'Next.js'],
  },
  {
    role: 'Research & Development Staff',
    ...BINUS,
    start: 'Sep 2019',
    end: 'Apr 2022',
    location: 'Indonesia',
    highlights: ['Joined the R&D team building software for teaching and lab operations.'],
  },
  {
    role: 'Teaching Assistant',
    ...BINUS,
    start: 'Aug 2018',
    end: 'Sep 2019',
    location: 'Indonesia',
    highlights: [
      'Taught cyber security, computer science and web development to university students.',
    ],
  },
]

export const experience = import.meta.env.PROD ? entries.filter((e) => !e.placeholder) : entries
