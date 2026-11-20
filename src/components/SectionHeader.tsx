import type { ReactNode } from 'react'

type Props = {
  /** Numbered index, e.g. "01". */
  index: string
  kicker: string
  title: string
  children?: ReactNode
}

export function SectionHeader({ index, kicker, title, children }: Props) {
  return (
    <div className="mb-10 border-t border-line pt-6 md:flex md:items-end md:justify-between md:gap-8">
      <div>
        <p className="font-mono text-xs tracking-wider text-subtle uppercase">
          {index} — {kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {children && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base md:mt-0 md:text-right">
          {children}
        </p>
      )}
    </div>
  )
}
