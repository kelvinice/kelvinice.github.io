import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'
import { PixelSnowflake } from './PixelSnowflake'
import { ThemeToggle } from './ThemeToggle'

export type NavItem = { id: string; label: string }

export function Navbar({ items }: { items: NavItem[] }) {
  const active = useActiveSection(items.map((item) => item.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b-3 transition-colors duration-300',
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <PixelSnowflake className="size-7 text-ice transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-pixel text-[0.7rem] tracking-wider text-ink">KELVINICE</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 font-mono text-sm font-medium transition-colors',
                  active === item.id ? 'text-ice' : 'text-muted hover:text-ink',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'text-[0.6rem] text-pink',
                    active === item.id ? 'animate-blink' : 'invisible',
                  )}
                >
                  ▶
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-9 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t-3 border-line px-4 pb-4 lg:hidden">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 border-b border-line/60 py-3.5 font-pixel text-xs',
                  active === item.id ? 'text-ice' : 'text-ink',
                )}
              >
                <span aria-hidden className="text-pink">
                  {active === item.id ? '▶' : '·'}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
