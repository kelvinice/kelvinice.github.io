import type { ReactNode } from 'react'

/** Small mono label for a technology or practice. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  )
}
