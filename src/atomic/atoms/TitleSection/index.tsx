import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextLinkProps {
  children: ReactNode
  id?: string
  className?: string
  center?: boolean
}

export default function TitleSection(props: TextLinkProps) {
  const { children, className = '', id = '', center = false } = props
  return (
    <div
      className={clsx(
        center && 'flex-col',
        !center && 'flex-row',
        'flex items-center gap-2',
        className
      )}
    >
      {!center && <div className="h-6 w-[6px] rounded-full bg-primary" />}
      <h2 id={id} className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
        {children}
      </h2>
      {center && <div className="w-6 h-[6px] rounded-full bg-primary" />}
    </div>
  )
}
