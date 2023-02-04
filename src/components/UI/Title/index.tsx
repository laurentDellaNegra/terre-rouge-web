import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export default function Title(props: TitleProps) {
  const { children } = props
  return (
    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{children}</h1>
  )
}
