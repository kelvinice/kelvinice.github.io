import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { buttonClass } from '@/lib/button'
import { cn } from '@/lib/cn'
import { profile } from '@/data/profile'
import { LogoMark } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export type NavItem = { id: string; label: string }

export function Navbar({ items }: { items: NavItem[] }) {
  const active = useActiveSection(items.map((item) => item.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
        'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200',
        scrolled || open
          ? 'border-line bg-bg/80 backdrop-blur-lg'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6"
      >
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="size-7" />
          <span className="font-semibold tracking-tight text-ink">{profile.name}</span>
          <span className="hidden font-mono text-xs text-muted sm:inline">/ software engineer</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className={buttonClass({ size: 'sm', className: 'max-sm:hidden' })}>
            Start a project
            <ArrowUpRight aria-hidden />
          </a>
          <button
            type="button"
            className={buttonClass({ variant: 'ghost', size: 'icon', className: 'lg:hidden' })}
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
        <ul id="mobile-menu" className="border-t border-line px-5 pb-4 lg:hidden">
          {[...items, { id: 'contact', label: 'Start a project' }].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block border-b border-line py-3.5 text-[0.95rem]',
                  active === item.id ? 'text-accent' : 'text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
