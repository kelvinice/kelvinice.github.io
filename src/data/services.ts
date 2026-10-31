import {
  Boxes,
  ChartNoAxesCombined,
  FlaskConical,
  LayoutTemplate,
  Network,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/** "What I build": what a client can hire me for. */
export type Service = { title: string; description: string; icon: LucideIcon }

export const services: Service[] = [
  {
    title: 'Business systems',
    description:
      'ERP, HRIS, procurement and e-tender platforms: the internal tools a company actually runs on.',
    icon: Boxes,
  },
  {
    title: 'Websites with a CMS',
    description:
      'Fast company sites your team can update themselves: pages, portfolio, articles, lead forms.',
    icon: LayoutTemplate,
  },
  {
    title: 'Dashboards & reporting',
    description:
      'KPI and operational dashboards that turn raw data into numbers management can act on.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'APIs & backend services',
    description:
      'Laravel, NestJS and .NET services with authentication, role-based access and integrations.',
    icon: Network,
  },
  {
    title: 'Maintenance & takeover',
    description:
      'Inherited a system nobody wants to touch? I stabilise it, document it and keep shipping features.',
    icon: Wrench,
  },
  {
    title: 'Testing & QA',
    description:
      'Automated regression suites, end-to-end tests and load testing before launch day, not after.',
    icon: FlaskConical,
  },
]
