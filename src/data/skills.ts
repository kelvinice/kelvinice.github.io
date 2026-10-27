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
 * The "inventory" in the skills section. Grouped into slots.
 * TODO(kelvin): add or remove anything; icons come from react-icons (https://react-icons.github.io/react-icons/).
 */

export type Skill = { name: string; icon: IconType }
export type SkillGroup = { title: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'SvelteKit', icon: SiSvelte },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & data',
    skills: [
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: '.NET', icon: SiDotnet },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'Python', icon: SiPython },
      { name: 'Flask', icon: SiFlask },
      { name: 'PHP', icon: SiPhp },
    ],
  },
  {
    title: 'AI & automation',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'OpenAI API', icon: TbBrandOpenai },
      { name: 'Gemini API', icon: SiGooglegemini },
      { name: 'OCR (Tesseract)', icon: TbScanEye },
    ],
  },
  {
    title: 'Games, graphics & web3',
    skills: [
      { name: 'HTML Canvas', icon: TbSquaresFilled },
      { name: 'PixiJS', icon: TbDeviceGamepad2 },
      { name: 'Motion', icon: TbBrandFramerMotion },
      { name: '360° panoramas', icon: TbCube3dSphere },
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    title: 'Tooling & shipping',
    skills: [
      { name: 'Vite', icon: SiVite },
      { name: 'Vitest', icon: SiVitest },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]
