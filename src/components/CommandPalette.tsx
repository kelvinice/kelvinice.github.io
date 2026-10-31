import {
  ArrowRight,
  Copy,
  CornerDownLeft,
  Mail,
  Moon,
  Search,
  Sun,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import { profile } from '@/data/profile'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/cn'
import type { NavItem } from './Navbar'

type Command = {
  id: string
  group: 'Go to' | 'Actions' | 'Links'
  label: string
  icon: LucideIcon | IconType
  run: () => void
}

type Props = { open: boolean; onClose: () => void; sections: NavItem[] }

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
}

/** ⌘K / Ctrl+K menu: jump to a section, copy the email, open profiles, switch theme. */
export function CommandPalette({ open, onClose, sections }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [notice, setNotice] = useState('')
  const { theme, toggle } = useTheme()

  const commands = useMemo<Command[]>(
    () => [
      ...[...sections, { id: 'contact', label: 'Contact' }].map((section) => ({
        id: `go-${section.id}`,
        group: 'Go to' as const,
        label: section.label,
        icon: ArrowRight,
        run: () => scrollToSection(section.id),
      })),
      {
        id: 'copy-email',
        group: 'Actions',
        label: 'Copy email address',
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => setNotice('Email address copied'),
            () => setNotice(''),
          )
        },
      },
      {
        id: 'send-email',
        group: 'Actions',
        label: `Email ${profile.email}`,
        icon: Mail,
        run: () => window.open(`mailto:${profile.email}`, '_self'),
      },
      {
        id: 'theme',
        group: 'Actions',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        icon: theme === 'dark' ? Sun : Moon,
        run: toggle,
      },
      {
        id: 'github',
        group: 'Links',
        label: 'GitHub',
        icon: TbBrandGithub,
        run: () => window.open('https://github.com/kelvinice', '_blank', 'noreferrer'),
      },
      {
        id: 'linkedin',
        group: 'Links',
        label: 'LinkedIn',
        icon: TbBrandLinkedin,
        run: () => window.open('https://www.linkedin.com/in/kelvin-007-/', '_blank', 'noreferrer'),
      },
    ],
    [sections, theme, toggle],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? commands.filter((c) => `${c.group} ${c.label}`.toLowerCase().includes(q)) : commands
  }, [commands, query])

  // Open/close the native dialog (focus trap, Esc and top-layer come for free).
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      setQuery('')
      setActiveIndex(0)
      setNotice('')
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  const runCommand = (command: Command | undefined) => {
    if (!command) return
    command.run()
    if (command.id !== 'copy-email' && command.id !== 'theme') onClose()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((i) => (results.length ? (i + 1) % results.length : 0))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      runCommand(results[activeIndex])
    }
  }

  let lastGroup = ''

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
      aria-label="Command menu"
      className="mx-auto mt-[12vh] w-[min(34rem,calc(100%-2rem))] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl shadow-black/40 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Search aria-hidden className="size-4 shrink-0 text-muted" />
        <input
          autoFocus
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setActiveIndex(0)
          }}
          onKeyDown={onKeyDown}
          placeholder="Jump to a section or run an action…"
          aria-label="Search commands"
          aria-controls="command-list"
          aria-activedescendant={
            results[activeIndex] ? `cmd-${results[activeIndex].id}` : undefined
          }
          role="combobox"
          aria-expanded
          className="h-14 w-full bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-muted"
        />
        <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-muted">
          esc
        </kbd>
      </div>

      <ul id="command-list" ref={listRef} role="listbox" className="max-h-80 overflow-y-auto p-2">
        {results.length === 0 && (
          <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches “{query}”.</li>
        )}
        {results.map((command, index) => {
          const Icon = command.icon
          const header = command.group !== lastGroup ? command.group : null
          lastGroup = command.group
          return (
            <li key={command.id} role="presentation">
              {header && (
                <p className="px-3 pt-3 pb-1.5 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                  {header}
                </p>
              )}
              <div
                id={`cmd-${command.id}`}
                role="option"
                aria-selected={index === activeIndex}
                data-index={index}
                onMouseMove={() => setActiveIndex(index)}
                onClick={() => runCommand(command)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm',
                  index === activeIndex ? 'bg-surface-2 text-ink' : 'text-muted',
                )}
              >
                <Icon aria-hidden className="size-4 shrink-0" />
                <span className="flex-1">{command.label}</span>
                {index === activeIndex && (
                  <CornerDownLeft aria-hidden className="size-3.5 text-muted" />
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <p
        role="status"
        className="border-t border-line px-4 py-2.5 font-mono text-[0.7rem] text-muted"
      >
        {notice || '↑↓ to move · enter to select'}
      </p>
    </dialog>
  )
}
