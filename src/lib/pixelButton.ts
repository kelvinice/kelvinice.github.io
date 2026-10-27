import { cn } from './cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'icon' | 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'border-shadow bg-ice text-on-accent hover:bg-pink',
  secondary: 'border-line bg-surface text-ink hover:border-ice hover:text-ice',
  ghost: 'border-transparent bg-transparent text-muted shadow-none hover:text-ice',
}

const sizes: Record<Size, string> = {
  icon: 'size-9 [&_svg]:size-4.5',
  sm: 'gap-1.5 px-2.5 py-1.5 text-[0.6rem] [&_svg]:size-3.5',
  md: 'gap-2 px-4 py-3 text-[0.7rem] [&_svg]:size-4',
  lg: 'gap-3 px-6 py-4 text-xs [&_svg]:size-5',
}

export type StyleProps = { variant?: Variant; size?: Size; className?: string }

/** Shared look for links and buttons: chunky border, hard shadow, presses down on click. */
export function pixelButtonClass({ variant = 'primary', size = 'md', className }: StyleProps = {}) {
  return cn(
    'inline-flex shrink-0 cursor-pointer items-center justify-center border-3 font-pixel leading-none uppercase select-none',
    'shadow-[4px_4px_0_0_var(--shadow)] transition-[transform,box-shadow,background-color,color,border-color] duration-100',
    'hover:-translate-y-0.5 hover:shadow-[4px_6px_0_0_var(--shadow)]',
    'active:translate-x-1 active:translate-y-1 active:shadow-none',
    variants[variant],
    sizes[size],
    className,
  )
}
