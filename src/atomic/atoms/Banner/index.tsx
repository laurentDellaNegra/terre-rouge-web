import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface Props {
  className?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}
export default function Banner(props: Props) {
  const { children, onClick, className = '' } = props
  return (
    <div className={clsx(onClick && 'cursor-pointer', className)} {...(onClick ? { onClick } : {})}>
      <div className="text-center mx-auto max-w-7xl py-1 sm:py-2 px-3  sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
