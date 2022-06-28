import clsx from 'clsx'
import { ReactNode } from 'react'

interface SubTitleProps {
  children: ReactNode
  className?: string
}

export default function SubTitle(props: SubTitleProps) {
  const { children, className = '' } = props
  return <p className={clsx('text-md sm:text-lg md:text-xl', className)}>{children}</p>
}
