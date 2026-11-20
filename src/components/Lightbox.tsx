import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Picture } from './Picture'

export type LightboxItem = {
  title: string
  image: ImagePicture
  badge?: string
  highlight?: string
}

type Props = {
  item: LightboxItem | null
  onClose: () => void
}

/** Keyboard-accessible full-size screenshot preview modal. */
export function Lightbox({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus?.()
    }
  }, [item, onClose])

  if (!item) return null

  // Portal to <body> so section overflow/stacking can't clip the overlay.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} screenshot preview`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/75 p-4 backdrop-blur-xs sm:p-6"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <h3 className="truncate font-display text-base font-semibold text-ink sm:text-lg">
              {item.title}
            </h3>
            {item.badge && (
              <span className="shrink-0 rounded-md border border-line bg-bg-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted">
                {item.badge}
              </span>
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close screenshot preview"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line bg-bg text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-auto bg-bg-2 p-2.5 sm:p-5">
          <Picture
            picture={item.image}
            alt={`Full-size screenshot of ${item.title}`}
            sizes="(min-width: 1024px) 960px, 94vw"
            eager
            className="max-h-[72vh] w-auto rounded-lg border border-line/80 object-contain"
          />
        </div>

        {item.highlight && (
          <p className="border-t border-line bg-surface px-4 py-2.5 font-mono text-xs text-muted sm:px-5">
            {item.highlight}
          </p>
        )}
      </div>
    </div>,
    document.body,
  )
}
