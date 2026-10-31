import { LogoMark } from '@/components/Logo'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p className="flex items-center gap-2.5">
          <LogoMark className="size-5" />© {new Date().getFullYear()} {profile.name} ·{' '}
          {profile.location}
        </p>
        <p>
          Built with React & TypeScript ·{' '}
          <a
            href="https://github.com/kelvinice/kelvinice.github.io"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  )
}
