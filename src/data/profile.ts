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

  /** The one fixed hero headline. */
  headline: 'I build and test business software.',
  /** The only figure in the hero is one a reader can check against Experience. */
  intro:
    'I’m a full-stack developer in Jakarta with 8+ years of shipping production web systems, tests included. I also teach software testing and Scrum at BINUS University.',

  socials: [
    { label: 'GitHub', href: 'https://github.com/kelvinice', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kelvin-007-/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kelvinices@gmail.com', icon: 'email' },
  ] satisfies Social[],
}
