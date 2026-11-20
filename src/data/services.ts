/** "Services": what a client can hire me for. Shown next to how a project runs (process.ts). */
export type Service = { title: string; description: string }

export const services: Service[] = [
  {
    title: 'Business systems',
    description:
      'ERP, HRIS, procurement and e-tender platforms, with role-based access for each kind of user.',
  },
  {
    title: 'Websites with a CMS',
    description:
      'Fast company sites your team can update themselves: pages, portfolio, articles, lead forms.',
  },
  {
    title: 'Dashboards & reporting',
    description: 'KPI and operational dashboards built on the data your systems already hold.',
  },
  {
    title: 'APIs & backend services',
    description:
      'Laravel, NestJS and .NET services with authentication, role-based access and integrations.',
  },
  {
    title: 'Maintenance & takeover',
    description:
      'I take over existing systems, including older Laravel and CodeIgniter code, document them and keep adding features.',
  },
  {
    title: 'Testing & QA',
    description:
      'Automated regression suites, Selenium end-to-end tests, and JMeter load tests that run before launch.',
  },
]
