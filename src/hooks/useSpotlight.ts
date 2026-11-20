import { useEffect } from 'react'

/**
 * One document-level listener that feeds the cursor position to whichever `.spotlight`
 * element is under the pointer, as --mx / --my (see the `spotlight` utility in globals.css).
 */
export function useSpotlight() {
  useEffect(() => {
    if (!matchMedia('(hover: hover)').matches) return

    const onMove = (event: PointerEvent) => {
      const el = (event.target as Element | null)?.closest<HTMLElement>('.spotlight')
      if (!el) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      el.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
