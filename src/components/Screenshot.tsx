import { Expand } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { LightboxItem } from './Lightbox'
import { Picture } from './Picture'

type Props = {
  image: ImagePicture
  title: string
  alt: string
  badge?: string
  /** Footnote shown in the Lightbox under the full image. */
  highlight?: string
  sizes: string
  onPreview: (item: LightboxItem) => void
  className?: string
}

/** A 16:10 screenshot thumbnail that opens the full image in the Lightbox. */
export function Screenshot({
  image,
  title,
  alt,
  badge,
  highlight,
  sizes,
  onPreview,
  className,
}: Props) {
  return (
    <div className={cn('relative aspect-[16/10] overflow-hidden bg-bg-2', className)}>
      <button
        type="button"
        onClick={() => onPreview({ title, image, badge, highlight })}
        aria-label={`Enlarge screenshot of ${title}`}
        className="group/shot relative block size-full cursor-zoom-in"
      >
        <Picture
          picture={image}
          alt={alt}
          sizes={sizes}
          className="size-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
        />
        <span
          aria-hidden
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-lg border border-line bg-surface/90 text-muted opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
        >
          <Expand className="size-4" />
        </span>
      </button>
    </div>
  )
}
