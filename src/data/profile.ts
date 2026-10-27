/**
 * Who you are. Everything on the hero, about and contact sections reads from here.
 * Lines marked TODO(kelvin) are drafts — rewrite them in your own voice.
 */

export type Social = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export const profile = {
  name: 'Kelvin',
  handle: 'Kelvinice',
  role: 'Lecturer & software developer',
  tagline: 'I teach, lead academic development at BINUS, and build web apps & browser games.',
  // First year of public code on GitHub, shown as "SINCE" in the hero HUD.
  codingSince: 2018,
  email: 'kelvinices@gmail.com',
  // Drop a PDF in public/ and point this at it (e.g. '/resume.pdf') to show the CV button.
  resumeUrl: null as string | null,

  // TODO(kelvin): draft bio. Each string is one paragraph.
  bio: [
    'I’m Kelvin, Academic Development Section Head and Lecturer at Bina Nusantara University (BINUS), and still a passionate software developer. I started out as a laboratory teaching assistant, teaching cyber security, computer science and web development, then moved into research & development before taking on my current role.',
    'Lately I’ve been working on the Wyn series: small, polished web games and apps built with React and Supabase, with daily puzzles, friend races and cloud sync.',
    'On the full-stack side I build NestJS and Spring Boot systems that take busywork off people’s plates: document automation for BINUS University’s graduation division that OCRs, sorts and files scanned documents by itself, an AI plagiarism checker for programming assignments, a review tool for lab assistants, and a hackathon platform for Indonesia’s free school-meals programme. And before all that, canvas games written from scratch.',
  ],

  // Shown on the "character card" in the about section.
  stats: [
    { label: 'Class', value: 'Section Head & Lecturer' },
    { label: 'Guild', value: 'Bina Nusantara University' },
    { label: 'Main quest', value: 'Web apps, browser games & automation' },
    { label: 'Favourite stack', value: 'React · TypeScript · NestJS · Supabase' },
    { label: 'Side quest', value: 'Learning Japanese (see Wyntabi)' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/kelvinice', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kelvin-b012a48a/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kelvinices@gmail.com', icon: 'email' },
  ] satisfies Social[],
}
