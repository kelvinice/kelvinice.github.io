import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Snowflake } from './Logo'
import { Reveal } from './Reveal'

type Props = {
  id: string
  /** Small label above the title, e.g. "Selected work". */
  eyebrow: string
  title: string
  intro?: ReactNode
  /** Alternate background band, to separate neighbouring sections. */
  tinted?: boolean
  /** Faint paper texture. Use sparingly: only a few sections get one. */
  backdrop?: 'dots' | 'grid'
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, tinted, backdrop, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative border-t border-line', tinted && 'bg-bg-2')}
    >
      {backdrop && (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0',
            backdrop === 'dots' ? 'bg-dots' : 'bg-grid',
          )}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <Snowflake className="size-3.5" />
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
        {children}
      </div>
    </section>
  )
}
