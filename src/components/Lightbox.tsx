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

/**
 * Full-size screenshot preview on a native modal <dialog>: the rest of the page is inert while
 * it's open (so Tab and Shift+Tab stay inside), Escape closes it, and focus returns to the
 * button that opened it.
 */
export function Lightbox({ item, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const open = item !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !open) return

    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()

    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
      opener?.focus?.()
    }
  }, [open])

  // Portal to <body> so section overflow/stacking can't affect the dialog.
  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={item ? `${item.title} screenshot preview` : undefined}
      // Escape closes the dialog natively; keep React state in sync.
      onClose={onClose}
      // A click on the dialog element itself is a click on the backdrop area.
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="m-auto max-h-[92vh] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-xs open:flex open:animate-fade-in open:flex-col sm:w-[calc(100%-3rem)]"
    >
      {item && (
        <>
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <h2 className="truncate font-display text-base font-semibold text-ink sm:text-lg">
                {item.title}
              </h2>
              {item.badge && (
                <span className="shrink-0 rounded-md border border-line bg-bg-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted">
                  {item.badge}
                </span>
              )}
            </div>
            <button
              type="button"
              // Focused first when the dialog opens.
              autoFocus
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
        </>
      )}
    </dialog>,
    document.body,
  )
}
