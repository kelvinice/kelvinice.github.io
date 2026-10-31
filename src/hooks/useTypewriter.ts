import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1800

/**
 * Types each word, holds it, deletes it, moves to the next, forever.
 * With reduced motion it just shows the first word.
 */
export function useTypewriter(words: string[]) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const word = words[index % words.length]

  useEffect(() => {
    if (reduced) return

    let delay = deleting ? DELETE_MS : TYPE_MS
    let next: () => void

    if (!deleting && length === word.length) {
      delay = HOLD_MS
      next = () => setDeleting(true)
    } else if (deleting && length === 0) {
      delay = 250
      next = () => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }
    } else {
      next = () => setLength((n) => n + (deleting ? -1 : 1))
    }

    const timer = setTimeout(next, delay)
    return () => clearTimeout(timer)
  }, [reduced, deleting, length, word])

  return reduced ? words[0] : word.slice(0, length)
}
