import { FileDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'
import { ButtonLink } from './Button'
import { PixelSnowflake } from './PixelSnowflake'
import { ThemeToggle } from './ThemeToggle'

export type NavItem = { id: string; label: string }

export function Navbar({ items }: { items: NavItem[] }) {
  const active = useActiveSection(items.map((item) => item.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200',
        scrolled || open
          ? 'border-line bg-bg/92 backdrop-blur-md'
          : 'border-transparent bg-bg/75 backdrop-blur-sm',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-15 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-ink"
          onClick={() => setOpen(false)}
        >
          <PixelSnowflake className="size-5 text-accent transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-display text-base font-semibold tracking-tight">kelvinice</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={cn(
                  'relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors',
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    'absolute inset-x-3 bottom-0.5 h-0.5 rounded-full transition-opacity',
                    active === item.id ? 'bg-accent opacity-100' : 'opacity-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {profile.resumeUrl && (
            <ButtonLink
              href={profile.resumeUrl}
              variant="secondary"
              size="sm"
              download
              className="hidden sm:inline-flex"
            >
              <FileDown aria-hidden />
              CV
            </ButtonLink>
          )}
          <ThemeToggle />
          <button
            type="button"
            className="flex size-9 cursor-pointer items-center justify-center rounded-sm border border-line bg-surface text-ink transition-colors hover:border-line-strong lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="divide-y divide-line border-t border-line bg-bg px-4 pb-2 lg:hidden"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between py-3.5 text-sm font-medium',
                  active === item.id ? 'text-accent' : 'text-ink',
                )}
              >
                {item.label}
                {active === item.id && (
                  <span className="font-mono text-xs text-accent">Active</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
