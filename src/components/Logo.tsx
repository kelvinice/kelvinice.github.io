import { cn } from '@/lib/cn'

/** Six-armed snowflake ("Kelvin" → ice), the same mark as public/favicon.svg. */
export const SNOWFLAKE_PATH =
  'M16 16L16 5.5M16 9.8L13.49 7.82M16 9.8L18.51 7.82M16 16L25.09 10.75M21.37 12.9L21.83 9.73M21.37 12.9L24.34 14.09M16 16L25.09 21.25M21.37 19.1L24.34 17.91M21.37 19.1L21.83 22.27M16 16L16 26.5M16 22.2L18.51 24.18M16 22.2L13.49 24.18M16 16L6.91 21.25M10.63 19.1L10.17 22.27M10.63 19.1L7.66 17.91M16 16L6.91 10.75M10.63 12.9L7.66 14.09M10.63 12.9L10.17 9.73'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn('shrink-0', className)}>
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path
        d={SNOWFLAKE_PATH}
        fill="none"
        stroke="var(--on-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
