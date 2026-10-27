import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  /** Small arcade-style label above the title, e.g. "STAGE 02". */
  kicker: string
  title: string
  children?: ReactNode
}

export function SectionHeading({ kicker, title, children }: Props) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-semibold tracking-[0.3em] text-pink uppercase">
        <span aria-hidden>▶ </span>
        {kicker}
      </p>
      <h2 className="font-pixel text-xl leading-snug text-ink text-glow sm:text-2xl md:text-3xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-lg text-muted">{children}</div>}
    </Reveal>
  )
}
