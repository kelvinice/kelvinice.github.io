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
    'I’m Kelvin (S.Kom., M.Kom.), Academic Development Section Head and Lecturer at BINUS University, and still a passionate software developer. I started at BINUS in 2018 as a teaching assistant for cyber security, computer science and web development, spent six years in research & development, and have lectured since 2023. Along the way I co-wrote two books with colleagues, on object-oriented design and agentic AI.',
    'Outside of work I’m always building something: games and apps, mostly with React, TypeScript and Supabase.',
    'On the full-stack side I build NestJS and Spring Boot systems that take busywork off people’s plates: document automation for BINUS University’s graduation division that OCRs, sorts and files scanned documents by itself, an AI plagiarism checker and a review tool for lab assistants at BINUS SLC, and a hackathon platform for Indonesia’s free school-meals programme. And before all that, canvas games written from scratch.',
  ],

  // Shown on the "character card" in the about section.
  stats: [
    { label: 'Class', value: 'Section Head & Lecturer' },
    { label: 'Guild', value: 'BINUS University' },
    { label: 'Degrees', value: 'S.Kom., M.Kom.' },
    { label: 'Main quest', value: 'Web apps, browser games & automation' },
    { label: 'Favourite stack', value: 'React · TypeScript · NestJS · Supabase' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/kelvinice', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kelvin-007-/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kelvinices@gmail.com', icon: 'email' },
  ] satisfies Social[],
}
