import { cn } from '@/lib/cn'

/** "K" monogram, the same mark as public/favicon.svg. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn('shrink-0', className)}>
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path
        d="M11 8.5v15M11 16.5l8.5-8M13.6 14l6.4 9.5"
        fill="none"
        stroke="var(--on-accent)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
