import { useState } from 'react'
import { PixelSnowflake } from '@/components/PixelSnowflake'
import { profile } from '@/data/profile'

export function Footer({ onToggleSnow }: { onToggleSnow?: () => void }) {
  const [clicks, setClicks] = useState(0)

  const handleMarkClick = () => {
    if (!onToggleSnow) return
    const next = clicks + 1
    if (next >= 5) {
      setClicks(0)
      onToggleSnow()
    } else {
      setClicks(next)
    }
  }

  return (
    <footer className="border-t border-line bg-bg-2/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleMarkClick}
            aria-label="Snowflake mark"
            className="inline-flex cursor-pointer items-center text-accent transition-transform duration-300 hover:rotate-90"
          >
            <PixelSnowflake className="size-4" />
          </button>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span aria-hidden>·</span>
          <a
            href="https://github.com/kelvinice/kelvinice.github.io"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            Source
          </a>
        </p>

        <p className="font-mono text-xs text-subtle" title="Konami code toggles snow">
          ↑↑↓↓←→←→BA
        </p>
      </div>
    </footer>
  )
}
