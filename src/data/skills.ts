import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiDotnet,
  SiFlask,
  SiGooglegemini,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSolidity,
  SiSpringboot,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from 'react-icons/si'
import {
  TbBrandFramerMotion,
  TbBrandOpenai,
  TbCube3dSphere,
  TbDeviceGamepad2,
  TbScanEye,
  TbSquaresFilled,
} from 'react-icons/tb'

/**
 * Capability matrix rendered in the Background / Technical Stack section.
 * Highlighted (`primary: true`) entries represent daily drivers.
 */

export type Skill = { name: string; icon: IconType; primary?: boolean }
export type SkillGroup = { title: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Interfaces',
    skills: [
      { name: 'React', icon: SiReact, primary: true },
      { name: 'TypeScript', icon: SiTypescript, primary: true },
      { name: 'Tailwind CSS', icon: SiTailwindcss, primary: true },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'SvelteKit', icon: SiSvelte },
      { name: 'TanStack Query', icon: SiReactquery },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'NestJS', icon: SiNestjs, primary: true },
      { name: 'Prisma', icon: SiPrisma, primary: true },
      { name: 'PostgreSQL', icon: SiPostgresql, primary: true },
      { name: 'Supabase', icon: SiSupabase, primary: true },
      { name: 'Python', icon: SiPython, primary: true },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: '.NET', icon: SiDotnet },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'Flask', icon: SiFlask },
      { name: 'PHP', icon: SiPhp },
    ],
  },
  {
    title: 'AI, Automation & Games',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'OpenAI API', icon: TbBrandOpenai },
      { name: 'Gemini API', icon: SiGooglegemini },
      { name: 'OCR (Tesseract)', icon: TbScanEye },
      { name: 'HTML Canvas', icon: TbSquaresFilled },
      { name: 'PixiJS', icon: TbDeviceGamepad2 },
      { name: 'Motion', icon: TbBrandFramerMotion },
      { name: '360° panoramas', icon: TbCube3dSphere },
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    title: 'Tooling & Delivery',
    skills: [
      { name: 'Vite', icon: SiVite, primary: true },
      { name: 'Git', icon: SiGit, primary: true },
      { name: 'Vitest', icon: SiVitest },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]
