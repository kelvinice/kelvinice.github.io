import headshot from '@/assets/images/headshot.jpg?avatar'

/**
 * Who you are. The hero, contact and footer read from here.
 *
 * Confidential client work is described in src/data/work.ts with codename-safe labels only.
 * Never put a real client name in this repo (see README → Confidentiality).
 */

export type Social = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export const profile = {
  name: 'Kelvin',
  handle: 'Kelvinice',
  role: 'Software Engineer · Full-stack Web Developer',
  location: 'Jakarta, Indonesia',
  email: 'kelvinices@gmail.com',
  photo: headshot,

  /** Hero headline: "I build <word> that teams rely on." The words cycle with a typing effect. */
  buildWords: ['web apps', 'business systems', 'dashboards', 'APIs', 'internal tools'],
  intro:
    'Web developer and software engineer with 8+ years of experience designing, building and testing production systems, from database schema to deployed UI. I work in sprints, ship in small steps, and make sure things hold up under real use.',

  stats: [
    { value: '8+', label: 'years building software' },
    { value: '10+', label: 'production systems shipped' },
    { value: '6', label: 'years in R&D engineering' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/kelvinice', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kelvin-007-/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kelvinices@gmail.com', icon: 'email' },
  ] satisfies Social[],
}
