/** Tech stack, grouped. Plain text on purpose: easy to scan, no icon payload. */

export type SkillGroup = { title: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['Laravel', 'NestJS', 'Node.js', 'Express', '.NET Core', 'Spring Boot', 'CodeIgniter'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'Prisma', 'Supabase', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Testing & QA',
    skills: ['Jest', 'Vitest', 'PHPUnit', 'Selenium WebDriver', 'Apache JMeter'],
  },
  {
    title: 'Delivery',
    skills: ['Scrum', 'Git', 'GitHub Actions', 'Docker', 'Vercel'],
  },
  {
    title: 'Also',
    skills: ['Python', 'Java', 'Flutter', 'OpenAI & Gemini APIs', 'OCR (Tesseract)'],
  },
]
