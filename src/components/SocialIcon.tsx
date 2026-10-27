import { Mail } from 'lucide-react'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import type { Social } from '@/data/profile'

const icons = {
  github: TbBrandGithub,
  linkedin: TbBrandLinkedin,
  email: Mail,
} satisfies Record<Social['icon'], unknown>

export function SocialIcon({ icon, className }: { icon: Social['icon']; className?: string }) {
  const Icon = icons[icon]
  return <Icon className={className} aria-hidden />
}
