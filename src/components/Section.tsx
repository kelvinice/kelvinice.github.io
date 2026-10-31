import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

type Props = {
  id: string
  /** Small label above the title, e.g. "Selected work". */
  eyebrow: string
  title: string
  intro?: ReactNode
  /** Alternate background band, to separate neighbouring sections. */
  tinted?: boolean
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, tinted, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-t border-line', tinted && 'bg-bg-2')}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
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
