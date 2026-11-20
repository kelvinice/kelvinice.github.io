import type { ComponentProps, ReactNode } from 'react'
import { buttonClass, type StyleProps } from '@/lib/button'

type LinkProps = ComponentProps<'a'> & StyleProps & { children: ReactNode }

/** An anchor styled as a button. External links open in a new tab automatically. */
export function ButtonLink({ variant, size, className, href, children, ...rest }: LinkProps) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      className={buttonClass({ variant, size, className })}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

type ButtonProps = ComponentProps<'button'> & StyleProps

export function Button({ variant, size, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonClass({ variant, size, className })} {...rest} />
}
