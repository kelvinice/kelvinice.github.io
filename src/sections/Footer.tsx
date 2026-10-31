import { ArrowUp } from 'lucide-react'
import { LogoMark } from '@/components/Logo'
import { profile } from '@/data/profile'
import { commandShortcut } from '@/lib/platform'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p className="flex items-center gap-2.5">
          <LogoMark className="size-5" />© {new Date().getFullYear()} {profile.name} ·{' '}
          {profile.location}
        </p>
        <p className="flex items-center gap-4">
          <span className="hidden font-mono text-xs md:inline">
            Tip: press <kbd className="rounded border border-line px-1">{commandShortcut}</kbd>
          </span>
          <a
            href="https://github.com/kelvinice/kelvinice.github.io"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            Source
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-ink">
            Back to top <ArrowUp aria-hidden className="size-3.5" />
          </a>
        </p>
      </div>
    </footer>
  )
}
