import { ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { buttonClass } from '@/lib/button'
import { cn } from '@/lib/cn'
import { commandShortcut, isMac } from '@/lib/platform'
import { profile } from '@/data/profile'
import { LogoMark } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export type NavItem = { id: string; label: string }

type Props = { items: NavItem[]; onOpenCommands: () => void }

export function Navbar({ items, onOpenCommands }: Props) {
  const active = useActiveSection(items.map((item) => item.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(window.scrollY > 8)
        progressRef.current?.style.setProperty(
          'transform',
          `scaleX(${max > 0 ? window.scrollY / max : 0})`,
        )
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="size-7 transition-transform duration-700 ease-out group-hover:rotate-[180deg]" />
          <span className="font-semibold tracking-tight text-ink">{profile.name}</span>
          <span className="hidden font-mono text-xs text-muted sm:inline">/ software engineer</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-sm transition-colors',
                  active === item.id
                    ? 'bg-surface-2 text-ink'
                    : 'text-muted hover:bg-surface-2/60 hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommands}
            aria-label="Open command menu"
            aria-keyshortcuts={isMac ? 'Meta+K' : 'Control+K'}
            className={buttonClass({
              variant: 'ghost',
              size: 'sm',
              className: 'border-line px-2.5 text-muted',
            })}
          >
            <Search aria-hidden />
            <kbd className="hidden font-mono text-[0.7rem] sm:inline">{commandShortcut}</kbd>
          </button>
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

      {/* Reading progress. */}
      <div
        ref={progressRef}
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />
    </header>
  )
}
