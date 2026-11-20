import { cn } from './cn'

type Variant = 'primary' | 'accent' | 'signal' | 'secondary' | 'ghost'
type Size = 'icon' | 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'border-ink bg-ink text-bg hover:border-accent hover:bg-accent hover:text-on-accent',
  accent: 'border-accent bg-accent text-on-accent hover:opacity-90',
  signal: 'border-signal bg-signal text-white hover:opacity-90',
  secondary: 'border-line bg-surface text-ink hover:border-line-strong hover:bg-bg-2',
  ghost: 'border-transparent bg-transparent text-muted hover:bg-bg-2 hover:text-ink',
}

const sizes: Record<Size, string> = {
  icon: 'size-9 [&_svg]:size-4',
  sm: 'gap-1.5 px-3 py-1.5 text-xs [&_svg]:size-3.5',
  md: 'gap-2 px-4 py-2 text-sm [&_svg]:size-4',
  lg: 'gap-2 px-5 py-2.5 text-sm [&_svg]:size-4',
}

export type StyleProps = { variant?: Variant; size?: Size; className?: string }

/** Shared styling for crisp editorial buttons and action links. */
export function buttonClass({ variant = 'primary', size = 'md', className }: StyleProps = {}) {
  return cn(
    'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm border leading-none font-medium select-none',
    'transition-colors duration-150',
    variants[variant],
    sizes[size],
    className,
  )
}
