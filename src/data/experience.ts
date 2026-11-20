/**
 * Work history, newest first. Client and contract work is not listed here on purpose:
 * it lives in src/data/work.ts as case studies.
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
}

const BINUS = { company: 'BINUS University', companyUrl: 'https://binus.ac.id/' }

export const experience: Experience[] = [
  {
    role: 'Academic Development Section Head',
    ...BINUS,
    start: 'Oct 2025',
    location: 'Jakarta',
    highlights: [
      'Lead the team that runs the university’s laboratory courses.',
      'Oversee the development of new course materials.',
      'Make sure courses, and the software and tools they use, meet campus standards.',
      'Oversee skill development for lab assistants.',
      'Build and maintain Plagion, an AI plagiarism checker for programming assignments, guarded by a regression suite.',
    ],
  },
  {
    role: 'Lecturer, Computer Science',
    ...BINUS,
    start: 'Aug 2023',
    location: 'Jakarta',
    highlights: [
      'Teach software engineering, Scrum & Agile, software testing and secure development.',
      'Co-authored two books: Building Better Object-Oriented Software and The Rise of Agentic Intelligence.',
    ],
  },
  {
    role: 'Research & Development Officer',
    ...BINUS,
    start: 'Apr 2022',
    end: 'Sep 2025',
    location: 'Jakarta',
    highlights: [
      'Load- and stress-tested high-traffic university systems with JMeter ahead of peak enrolment.',
      'Built Jest unit and integration suites for Node.js/NestJS microservices, and a secure service-to-service data transfer layer.',
      'Built a 360° virtual-tour web app with images, video and multimedia hotspots.',
    ],
    tech: ['NestJS', 'Node.js', '.NET', 'Next.js', 'Jest', 'JMeter'],
  },
  {
    role: 'Research & Development Staff',
    ...BINUS,
    start: 'Sep 2019',
    end: 'Apr 2022',
    location: 'Jakarta',
    highlights: [
      'Built encrypted data transfer and a monitoring dashboard for a national pandemic hospital.',
      'Built and stress-tested a national competition website and a DISC personality assessment platform.',
    ],
  },
  {
    role: 'Teaching Assistant',
    ...BINUS,
    start: 'Aug 2018',
    end: 'Sep 2019',
    location: 'Jakarta',
    highlights: ['Taught cyber security, software testing and web development.'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Science (M.Kom.)',
    school: 'BINUS University',
    years: '2020 – 2022',
  },
  {
    degree: 'Bachelor of Computer Science (S.Kom.)',
    school: 'BINUS University',
    years: '2016 – 2020',
    note: 'Thesis: an automated web-testing framework with Selenium WebDriver.',
  },
]
