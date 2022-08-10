import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextLinkProps {
  children: ReactNode
  className?: string
}

export default function TitleSection(props: TextLinkProps) {
  const { children, className = '' } = props
  return (
    <div className={clsx('flex flex-row items-center gap-2', className)}>
      <div className="h-6 w-[6px] rounded-full bg-primary" />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
    </div>
  )
}
