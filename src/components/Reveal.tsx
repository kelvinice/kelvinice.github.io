import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from 'react'
import { cn } from '@/lib/cn'

type Props<T extends ElementType> = {
  as?: T
  /** Seconds to wait after entering the viewport, for staggering siblings. */
  delay?: number
} & ComponentPropsWithoutRef<T>

/**
 * Fades and lifts its children in the first time they scroll into view.
 * CSS-only animation (the `reveal` utility); this just flips `data-shown`.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  delay = 0,
  className,
  style,
  ...rest
}: Props<T>) {
  const ref = useRef<HTMLElement>(null)
  const Tag: ElementType = as ?? 'div'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.setAttribute('data-shown', '')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    />
  )
}
