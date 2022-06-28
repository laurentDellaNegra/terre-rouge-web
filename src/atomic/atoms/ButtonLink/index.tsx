import { ReactNode } from 'react'

interface ButtonLinkProps {
  children: ReactNode
  href: string
  className?: string
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { children, className = '', href } = props
  return (
    <div className={className}>
      <a
        href={href}
        className="inline-block rounded-md border border-transparent bg-primary py-3 px-8 font-medium hover:bg-primary-dark"
      >
        {children}
      </a>
    </div>
  )
}
