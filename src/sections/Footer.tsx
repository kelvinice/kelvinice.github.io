import { PixelSnowflake } from '@/components/PixelSnowflake'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t-3 border-line bg-bg-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p className="flex items-center gap-2">
          <PixelSnowflake className="size-4 text-ice" />© {new Date().getFullYear()} {profile.name}
          {' · '}
          <a
            href="https://github.com/kelvinice/kelvinice.github.io"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-ice hover:underline"
          >
            Source
          </a>
        </p>
        <p className="font-mono text-xs" title="Try it">
          psst: ↑↑↓↓←→←→BA
        </p>
      </div>
    </footer>
  )
}
