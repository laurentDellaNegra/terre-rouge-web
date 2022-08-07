import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextLinkProps {
  children: ReactNode
  className?: string
}

export default function TitleSection(props: TextLinkProps) {
  const { children, className = '' } = props
  return (
    <div className={clsx('flex flex-row gap-2 items-center', className)}>
      <div className="bg-primary w-[6px] h-6 rounded-full" />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
    </div>
  )
}
