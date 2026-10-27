import { useEffect, useRef } from 'react'

const SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

/** Calls `onUnlock` when the visitor types ↑↑↓↓←→←→BA. */
export function useKonamiCode(onUnlock: () => void) {
  const progress = useRef(0)
  const callback = useRef(onUnlock)

  useEffect(() => {
    callback.current = onUnlock
  })

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      if (key === SEQUENCE[progress.current]) {
        progress.current += 1
        if (progress.current === SEQUENCE.length) {
          progress.current = 0
          callback.current()
        }
      } else {
        progress.current = key === SEQUENCE[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
