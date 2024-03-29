import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function P(props: Props) {
  const { className = '', children } = props
  return <p className={clsx('mb-2 text-gray-500', className)}>{children}</p>
}
