import { ReactNode } from 'react'

import Container from '@/atomic/atoms/Container'

interface Props {
  children: ReactNode
  className?: string
}

export default function Section(props: Props) {
  const { children, className = '' } = props
  return (
    <section className={className}>
      <Container className="py-16 sm:py-24">{children}</Container>
    </section>
  )
}
