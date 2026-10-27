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

const BINUS = { company: 'Bina Nusantara University', companyUrl: 'https://binus.ac.id/' }

// TODO(kelvin): add start/end dates, and confirm the R&D and assistant roles were at BINUS.
const entries: Experience[] = [
  {
    role: 'Academic Development Section Head & Lecturer',
    ...BINUS,
    highlights: [
      'Head the Academic Development section while lecturing university students.',
      'Still a developer at heart: build tools that take manual work off campus teams, like the document automation for the graduation division.',
    ],
  },
  {
    role: 'Research & Development Officer',
    ...BINUS,
    highlights: [
      'Promoted from Research & Development Staff to Officer.',
      'Researched and built software for teaching and lab operations.',
    ],
  },
  {
    role: 'Laboratory Teaching Assistant',
    ...BINUS,
    highlights: [
      'Taught cyber security, computer science and web development to university students.',
    ],
  },
]

export const experience = import.meta.env.PROD ? entries.filter((e) => !e.placeholder) : entries
