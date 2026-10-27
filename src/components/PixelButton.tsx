import type { ComponentProps, ReactNode } from 'react'
import { pixelButtonClass, type StyleProps } from '@/lib/pixelButton'

type LinkProps = ComponentProps<'a'> & StyleProps & { children: ReactNode }

/** An anchor styled as a pixel button. External links open in a new tab automatically. */
export function PixelLink({ variant, size, className, href, children, ...rest }: LinkProps) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      className={pixelButtonClass({ variant, size, className })}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

type ButtonProps = ComponentProps<'button'> & StyleProps

export function PixelButton({ variant, size, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={pixelButtonClass({ variant, size, className })} {...rest} />
}
