import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

type Props = {
  id: string
  /** Small label above the title, e.g. "Selected work". */
  eyebrow: string
  title: string
  intro?: ReactNode
  /** Shown as a big outlined numeral behind the heading, e.g. 1 → "01". */
  index?: number
  /** Alternate background band, to separate neighbouring sections. */
  tinted?: boolean
  /** Faint pattern behind the content. */
  backdrop?: 'dots' | 'grid'
  /** Side of the soft accent glow. */
  glow?: 'left' | 'right'
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  index,
  tinted,
  backdrop = 'dots',
  glow = 'right',
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative overflow-hidden', tinted && 'bg-bg-2')}
    >
      {/* Decoration: divider, pattern, glow. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--line)_15%,var(--accent)_50%,var(--line)_85%,transparent)] opacity-70"
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0',
          backdrop === 'dots' ? 'bg-dots' : 'bg-grid',
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute top-0 size-[34rem] rounded-full bg-accent/[0.07] blur-3xl',
          glow === 'right' ? '-right-48' : '-left-48',
        )}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        {index !== undefined && (
          <span
            aria-hidden
            className="pointer-events-none absolute top-10 right-5 font-mono text-[7rem] leading-none font-bold text-outline select-none sm:right-6 md:top-14 md:text-[10rem]"
          >
            {String(index).padStart(2, '0')}
          </span>
        )}

        <Reveal className="relative mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <span aria-hidden className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight text-balance text-ink md:text-4xl"
          >
            {title}
          </h2>
          {intro && <div className="mt-4 text-lg leading-relaxed text-muted">{intro}</div>}
        </Reveal>
        <div className="relative">{children}</div>
      </div>
    </section>
  )
}
