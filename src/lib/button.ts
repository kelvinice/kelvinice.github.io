import { cn } from './cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'icon' | 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'border-transparent bg-accent text-on-accent hover:bg-accent-strong',
  secondary: 'border-line bg-surface text-ink hover:border-muted/60 hover:bg-surface-2',
  ghost: 'border-transparent bg-transparent text-muted hover:bg-surface-2 hover:text-ink',
}

const sizes: Record<Size, string> = {
  icon: 'size-9 [&_svg]:size-4',
  sm: 'h-8 gap-1.5 px-3 text-xs [&_svg]:size-3.5',
  md: 'h-10 gap-2 px-4 text-sm [&_svg]:size-4',
  lg: 'h-12 gap-2 px-5 text-[0.95rem] [&_svg]:size-4.5',
}

export type ButtonStyleProps = { variant?: Variant; size?: Size; className?: string }

/** Shared look for links and buttons. */
export function buttonClass({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonStyleProps = {}) {
  return cn(
    'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border font-medium whitespace-nowrap select-none',
    'transition-colors duration-150',
    variants[variant],
    sizes[size],
    className,
  )
}
