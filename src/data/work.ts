import bersamaJaya from '@/assets/projects/bersama-jaya.jpg?picture'

/**
 * Client and contract work, shown in the "Selected work" section.
 *
 * CONFIDENTIALITY: work under NDA uses a generic `client` label and an illustration, never
 * a real name, logo, screenshot or module name copied from the client's UI. The real names live
 * only in reference/clients.md (gitignored). `pnpm check:confidential` and the pre-push hook enforce it.
 *
 * No dates or contracting entities on purpose: engagement details stay flexible.
 */

export type Illustration = 'cms' | 'erp' | 'hris' | 'dashboard' | 'marketplace' | 'assets'

export type CaseStudy = {
  slug: string
  /** Real name for public clients; a generic description for confidential ones. */
  client: string
  confidential?: boolean
  industry: string
  /** What I did, honestly worded: "Built …", "Developed & maintained …", "Led …". */
  scope: string
  role: string
  summary: string
  built: string[]
  tested?: string[]
  stack?: string[]
  link?: { href: string; label: string }
  visual: { illustration: Illustration } | { image: ImagePicture; alt: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'bersama-jaya',
    client: 'Bersama Jaya Bordir Studio',
    industry: 'Embroidery manufacturing',
    scope: 'Built the website, CMS and ERP',
    role: 'Full-stack developer',
    summary:
      'A Jakarta computer-embroidery workshop, running since 1998, needed a modern storefront and one system to run the business behind it.',
    built: [
      'Company website with services, portfolio, articles and guides, all edited through a CMS',
      'Instant price calculator: product type, quantity, logo size, fabric and thread colours',
      'Enquiry form with a WhatsApp hand-off for quick quotes',
      'ERP back office for the workshop’s day-to-day operations',
    ],
    stack: ['Next.js', 'Vercel'],
    link: { href: 'https://bersamajaya.vercel.app/', label: 'Visit site' },
    visual: { image: bersamaJaya, alt: 'Bersama Jaya Bordir Studio home page' },
  },
  {
    slug: 'automotive-hris-etender',
    client: 'Multinational automotive manufacturer in Indonesia',
    confidential: true,
    industry: 'Automotive manufacturing',
    scope: 'Built the HRIS and e-Tender system',
    role: 'Full-stack developer',
    summary:
      'Two internal platforms for a large manufacturer: one for its people, one for how it buys from vendors.',
    built: [
      'HRIS: employee master data, leave and attendance',
      'e-Tender: vendor registration and verification',
      'Tender publishing, bidding and evaluation in one flow',
      'Role-based access for HR, procurement staff and vendors',
    ],
    visual: { illustration: 'hris' },
  },
  {
    slug: 'automotive-erp',
    client: 'Automotive retail & distribution group',
    confidential: true,
    industry: 'Automotive retail',
    scope: 'Developed & maintained the ERP backend',
    role: 'Backend developer',
    summary: 'Core backend features of the ERP platform an automotive business runs on.',
    built: [
      'Core backend features across the ERP modules',
      'Data routing between modules, tuned for stability under daily load',
      'New features shipped without breaking existing flows',
    ],
    tested: ['Automated regression tests guarding every release'],
    stack: ['Laravel', 'PHP'],
    visual: { illustration: 'erp' },
  },
  {
    slug: 'hospital-asset-management',
    client: 'Multi-hospital asset management platform',
    confidential: true,
    industry: 'Healthcare',
    scope: 'Led backend development',
    role: 'Backend lead',
    summary:
      'Keeps medical equipment across several hospitals calibrated, maintained and inspected on time.',
    built: [
      'Dynamic role-based access control, configurable per hospital and per role',
      'Transactional workflows for calibration, maintenance and inspection scheduling',
      'Asset lifecycle and activation flows with strict state transitions',
    ],
    tested: ['Jest unit and integration tests across permission rules and state transitions'],
    stack: ['NestJS', 'TypeScript', 'Jest'],
    visual: { illustration: 'assets' },
  },
  {
    slug: 'midhub',
    client: 'MidHub.id',
    industry: 'Heavy equipment marketplace',
    scope: 'Built the core backend modules',
    role: 'Backend engineer',
    summary:
      'An Indonesian marketplace for buying and selling new and used heavy equipment and spare parts.',
    built: [
      'Product listings for new and used units and spare parts',
      'Premium membership for sellers',
      'Payment flow',
    ],
    link: { href: 'https://midhub.id/', label: 'Visit site' },
    visual: { illustration: 'marketplace' },
  },
  {
    slug: 'kpi-dashboard',
    client: 'Large state-owned enterprise',
    confidential: true,
    industry: 'Enterprise',
    scope: 'Built & maintained the KPI dashboard',
    role: 'Full-stack developer',
    summary:
      'Interactive dashboards that let management follow performance and field jobs in real time.',
    built: [
      'Interactive dashboards for real-time performance monitoring',
      'Job monitoring and the data systems behind it',
    ],
    tested: ['Performance-profiled under simulated concurrent load'],
    stack: ['Laravel', 'PHP'],
    visual: { illustration: 'dashboard' },
  },
]

/** Smaller entries listed under the featured case studies. */
export type MoreWork = { title: string; context: string; description: string; stack?: string[] }

export const moreWork: MoreWork[] = [
  {
    title: 'Corporate website & CMS',
    context: 'Energy company · NDA',
    description:
      'Maintained and extended the corporate site and CMS, including statistical reporting; report output validated against known datasets.',
    stack: ['CodeIgniter', 'PHP'],
  },
  {
    title: 'Hospital monitoring & RFID infant tracking',
    context: 'Healthcare · IoT',
    description:
      'Real-time tool monitoring for hospitals and an RFID-based infant tracking system.',
  },
  {
    title: 'Pandemic hospital data platform',
    context: 'BINUS R&D',
    description:
      'Encrypted data transfer and a monitoring dashboard for a national pandemic hospital, load-tested for peak reporting windows.',
    stack: ['JMeter'],
  },
  {
    title: 'National competition platform',
    context: 'BINUS R&D',
    description:
      'Registration and submission flows stress-tested with JMeter and tuned for nationwide traffic spikes.',
    stack: ['JMeter'],
  },
  {
    title: 'Employee data microservices',
    context: 'BINUS R&D',
    description:
      'Services that route complex employee data, with secure service-to-service authentication proven by before/after benchmarks.',
    stack: ['NestJS', 'Jest', 'JMeter'],
  },
  {
    title: 'DISC personality assessment',
    context: 'BINUS R&D',
    description:
      'Assessment site supporting hiring and career growth, with automated scoring validation.',
  },
]
