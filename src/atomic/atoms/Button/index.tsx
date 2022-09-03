import clsx from 'clsx'
import { MouseEventHandler, ReactNode } from 'react'

interface ActionButtonLinkProps {
  disabled?: boolean
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export default function Button(props: ActionButtonLinkProps) {
  const { children, className = '', onClick, disabled = false } = props
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      className={clsx(
        disabled ? 'bg-primary text-white' : 'bg-white hover:bg-primary-extra-light',
        'inline-flex h-10 items-center rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary',
        className
      )}
    >
      <a className="">{children}</a>
    </button>
  )
}
