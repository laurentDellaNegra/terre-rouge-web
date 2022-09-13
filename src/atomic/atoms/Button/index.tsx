import clsx from 'clsx'
import { MouseEventHandler, ReactNode } from 'react'

interface ActionButtonLinkProps {
  active?: boolean
  disabled?: boolean
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export default function Button(props: ActionButtonLinkProps) {
  const { children, className = '', onClick, disabled = false, active = false } = props
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      className={clsx(
        active
          ? 'bg-primary-extra-light text-primary'
          : 'bg-white hover:bg-primary hover:text-white',
        disabled && 'cursor-not-allowed',
        'inline-flex h-10 items-center rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary',
        className
      )}
    >
      {children}
    </button>
  )
}
