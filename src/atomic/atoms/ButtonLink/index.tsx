import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonLinkProps {
  children: ReactNode
  href: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { children, className = '', href, size = 'medium' } = props
  return (
    <div className={className}>
      <Link
        href={href}
        className={clsx(
          size === 'small' && '', //TODO
          size === 'medium' && 'px-4 py-2 text-sm',
          size === 'large' && 'py-3 px-8 font-medium',
          'inline-block items-center rounded-md border border-transparent bg-primary text-white hover:bg-primary-dark  focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2'
        )}
      >
        {children}
      </Link>
    </div>
  )
}
