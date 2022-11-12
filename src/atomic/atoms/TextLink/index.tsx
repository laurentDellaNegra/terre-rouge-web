import clsx from 'clsx'
import Link from 'next/link'
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
    <Link href={href}>
      <a className={clsx('font-semibold text-primary hover:text-primary-light', className)}>
        {children}
        {!hideArrow && <span aria-hidden="true"> &rarr;</span>}
      </a>
    </Link>
  )
}
