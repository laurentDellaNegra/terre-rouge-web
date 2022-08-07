import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  children: ReactNode
  className?: string
  hideArrow?: boolean
}

export default function TextLink(props: TextLinkProps) {
  const { href, children, className = '', hideArrow = false } = props
  return (
    <a
      href={href}
      className={clsx('text-sm font-semibold text-primary hover:text-primary-light', className)}
    >
      {children}
      {!hideArrow && <span aria-hidden="true"> &rarr;</span>}
    </a>
  )
}
