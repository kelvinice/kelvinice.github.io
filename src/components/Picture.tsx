import { cn } from '@/lib/cn'

type Props = {
  picture: ImagePicture
  alt: string
  sizes?: string
  className?: string
  /** Above-the-fold images should load eagerly. */
  eager?: boolean
}

/** Renders a vite-imagetools `?picture` import as <picture> with AVIF/WebP sources. */
export function Picture({ picture, alt, sizes = '100vw', className, eager }: Props) {
  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcset]) => (
        <source key={format} type={`image/${format}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('block', className)}
      />
    </picture>
  )
}
