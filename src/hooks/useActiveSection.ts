import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, including top and bottom-of-page edges.
 * Pass sections that have no nav link too (e.g. "contact"): when one of them is in view the
 * result is its id, which matches no link, so the previous link's highlight clears.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    const orderedIds = key.split('|').filter(Boolean)
    const elements = orderedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-38% 0px -54% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 100) {
        setActive(null)
        return
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48
      // The last observed section, which can be a non-nav one such as Contact.
      if (atBottom) setActive(elements[elements.length - 1].id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])

  return active
}
