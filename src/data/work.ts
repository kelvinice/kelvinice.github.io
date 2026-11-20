import bersamaJaya from '@/assets/projects/bersama-jaya.jpg?picture'
import cakraMotor11 from '@/assets/projects/cakra-motor-11.jpg?picture'
import docflow from '@/assets/projects/docflow.png?picture'
import midhub from '@/assets/projects/midhub.jpg?picture'

/**
 * Client and contract work, shown in the "Selected work" section: three featured case studies,
 * then a compact list. Each entry gets a shareable anchor, #work-<slug>; keep slugs stable.
 *
 * CONFIDENTIALITY: work under NDA uses a generic `client` label and no image, never a real
 * name, logo, screenshot or module name copied from the client's UI. The real names live only
 * in reference/clients.md (gitignored). `pnpm check:confidential` and the pre-push hook enforce it.
 *
 * No dates or contracting entities on purpose: engagement details stay flexible.
 */

export type Shot = {
  image: ImagePicture
  alt: string
  /** Shown under the thumbnail and in the Lightbox, e.g. when the image isn't my own work. */
  note?: string
}

export type CaseStudy = {
  slug: string
  /** Real name for public work; a generic description for confidential clients. */
  client: string
  confidential?: boolean
  /** Who the work was for when it isn't a client, e.g. "BINUS University". */
  credit?: string
  industry: string
  /** What I did, honestly worded: "Built …", "Developed & maintained …", "Led …". */
  scope: string
  role: string
  summary: string
  /** The one concrete result or deliverable a reader should remember. */
  evidence?: string
  built: string[]
  tested?: string[]
  stack?: string[]
  link?: { href: string; label: string }
  /** Public work only. Confidential cards are text-led. */
  shot?: Shot
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
    evidence:
      'Live on the public site: an instant price calculator for product type, quantity, logo size, fabric and thread colours.',
    built: [
      'Company website with services, portfolio, articles and guides, all edited through a CMS',
      'Enquiry form with a WhatsApp hand-off for quick quotes',
      'ERP back office for the workshop’s day-to-day operations',
    ],
    stack: ['Next.js', 'Vercel'],
    link: { href: 'https://bersamajaya.vercel.app/', label: 'Visit site' },
    shot: { image: bersamaJaya, alt: 'Bersama Jaya Bordir Studio home page' },
  },
  {
    slug: 'hospital-asset-management',
    client: 'Multi-hospital asset management platform',
    confidential: true,
    industry: 'Healthcare',
    scope: 'Built the platform full-stack, leading the backend',
    role: 'Full-stack developer',
    summary:
      'Keeps medical equipment across several hospitals calibrated, maintained and inspected on time.',
    built: [
      'Role-based access control that each hospital configures per role',
      'Transactional workflows for calibration, maintenance and inspection scheduling',
      'Asset lifecycle and activation flows with strict state transitions',
    ],
    tested: ['Jest unit and integration tests across permission rules and state transitions'],
    stack: ['NestJS', 'TypeScript', 'Jest'],
  },
  {
    slug: 'docflow',
    client: 'DocFlow',
    credit: 'BINUS University',
    industry: 'Graduation division',
    scope: 'Built the document pipeline and tracking',
    role: 'Full-stack developer',
    summary:
      'Graduation documents arrive as paper scans. DocFlow reads, sorts and files them, then tracks each bundle through approval.',
    evidence: 'In one run, 48 of 48 scans were filed correctly in 95 seconds.',
    built: [
      'OCR that reads each scanned document and files it without manual sorting',
      'QR codes that track document bundles through each approval step',
      'A dashboard where the graduation team follows every bundle',
    ],
    stack: ['Python', 'Tesseract', 'NestJS', 'Prisma'],
    shot: { image: docflow, alt: 'DocFlow dashboard' },
  },
]

/** The compact list under the featured case studies: role and one deliverable each. */
export type MoreWork = {
  slug: string
  title: string
  context: string
  role: string
  description: string
  stack?: string[]
  link?: { href: string; label: string }
  shot?: Shot
}

export const moreWork: MoreWork[] = [
  {
    slug: 'midhub',
    title: 'MidHub.id',
    context: 'Heavy equipment marketplace',
    role: 'Backend engineer',
    description:
      'Built the core backend modules: listings for new and used units and spare parts, premium seller membership and the payment flow.',
    link: { href: 'https://midhub.id/', label: 'Visit site' },
    shot: { image: midhub, alt: 'MidHub.id home page' },
  },
  {
    // Slug kept from the NDA days so existing #work-automotive-erp links still work.
    slug: 'automotive-erp',
    title: 'ERP backend',
    context: 'Cakra Motor 11 · Automotive retail & distribution',
    role: 'Backend developer',
    description:
      'Developed and maintained core backend features of the ERP, with automated regression tests run before every release.',
    stack: ['Laravel', 'PHP'],
    shot: {
      image: cakraMotor11,
      alt: 'Cakra Motor 11 public website',
      note: 'Their public site, for context. My work was the ERP backend behind the business.',
    },
  },
  {
    slug: 'automotive-hris-etender',
    title: 'HRIS and e-Tender system',
    context: 'Multinational automotive manufacturer · NDA',
    role: 'Full-stack developer',
    description:
      'Employee data, leave and attendance, plus vendor registration, tender bidding and evaluation, with role-based access for HR, procurement and vendors.',
  },
  {
    slug: 'kpi-dashboard',
    title: 'KPI dashboard',
    context: 'Large state-owned enterprise · NDA',
    role: 'Full-stack developer',
    description:
      'Built and maintained real-time performance and job-monitoring dashboards, profiled under simulated concurrent load.',
    stack: ['Laravel', 'PHP'],
  },
  {
    slug: 'corporate-cms',
    title: 'Corporate website & CMS',
    context: 'Energy company · NDA',
    role: 'Maintenance & enhancement',
    description:
      'Maintained and extended the corporate site and CMS, including statistical reporting validated against known datasets.',
    stack: ['CodeIgniter', 'PHP'],
  },
  {
    slug: 'hospital-monitoring',
    title: 'Hospital monitoring & RFID infant tracking',
    context: 'Healthcare · IoT',
    role: 'Developer',
    description:
      'Real-time tool monitoring for hospitals and an RFID-based infant tracking system.',
  },
  {
    slug: 'pandemic-data-platform',
    title: 'Pandemic hospital data platform',
    context: 'BINUS R&D',
    role: 'Developer',
    description:
      'Encrypted data transfer and a monitoring dashboard for a national pandemic hospital, load-tested for peak reporting windows.',
    stack: ['JMeter'],
  },
  {
    slug: 'competition-platform',
    title: 'National competition platform',
    context: 'BINUS R&D',
    role: 'Developer',
    description:
      'Registration and submission flows stress-tested with JMeter for nationwide traffic spikes.',
    stack: ['JMeter'],
  },
  {
    slug: 'employee-microservices',
    title: 'Employee data microservices',
    context: 'BINUS R&D',
    role: 'Developer',
    description:
      'Services that route employee data, with service-to-service authentication checked by before-and-after benchmarks.',
    stack: ['NestJS', 'Jest', 'JMeter'],
  },
]
