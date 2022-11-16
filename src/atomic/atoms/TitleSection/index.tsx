import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextLinkProps {
  children: ReactNode
  id?: string
  className?: string
  center?: boolean
  variant?: 'white'
}

export default function TitleSection(props: TextLinkProps) {
  const { children, className = '', id = '', center = false, variant = '' } = props
  return (
    <div
      className={clsx(
        center && 'flex-col',
        !center && 'flex-row',
        'flex items-center gap-2',
        className
      )}
    >
      {!center && (
        <div
          className={clsx(
            'h-6 w-[6px] rounded-full',
            variant === 'white' ? 'bg-white' : 'bg-primary'
          )}
        />
      )}
      <h2
        id={id}
        className={clsx(
          'text-2xl md:text-4xl font-bold tracking-tight',
          variant === 'white' ? 'text-white' : 'text-gray-900'
        )}
      >
        {children}
      </h2>
      {center && (
        <div
          className={clsx(
            'w-6 h-[6px] rounded-full',
            variant === 'white' ? 'bg-white' : 'bg-primary'
          )}
        />
      )}
    </div>
  )
}
