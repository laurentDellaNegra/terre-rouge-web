import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface Props {
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}
export default function Banner(props: Props) {
  const { children, onClick } = props
  return (
    <div
      className={clsx('bg-primary-light', onClick && 'cursor-pointer')}
      {...(onClick ? { onClick } : {})}
    >
      <div className="text-center mx-auto max-w-7xl py-1 px-3  sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}
