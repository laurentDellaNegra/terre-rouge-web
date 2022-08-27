import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Container(props: Props) {
  const { children, className = '' } = props
  return <div className={clsx('lg:mx-auto lg:max-w-7xl lg:px-8', className)}>{children}</div>
}
