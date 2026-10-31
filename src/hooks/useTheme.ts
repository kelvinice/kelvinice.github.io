import { useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const listeners = new Set<() => void>()

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function apply(next: Theme) {
  document.documentElement.dataset.theme = next
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', next === 'light' ? '#fafbfc' : '#0a0d12')
  listeners.forEach((listener) => listener())
}

/** Sets the theme and remembers it, so it stops following the system setting. */
export function setTheme(next: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
  apply(next)
}

function subscribe(listener: () => void) {
  listeners.add(listener)

  // Follow the system setting until the visitor picks a theme themselves.
  const media = matchMedia('(prefers-color-scheme: light)')
  const onSystemChange = (event: MediaQueryListEvent) => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {
      // ignore
    }
    if (!saved) apply(event.matches ? 'light' : 'dark')
  }
  media.addEventListener('change', onSystemChange)

  return () => {
    listeners.delete(listener)
    media.removeEventListener('change', onSystemChange)
  }
}

/**
 * The initial theme is applied by the inline script in index.html (no flash).
 * Every component using this hook shares one store, so toggles stay in sync.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, (): Theme => 'dark')
  return { theme, setTheme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}
