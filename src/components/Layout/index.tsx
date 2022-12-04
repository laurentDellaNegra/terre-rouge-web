import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Meta from '@/components/Meta'

import Breadcrumb from '../Breadcrumb'

interface Props {
  children: ReactNode
  crumb?: Array<{ title: string; route?: string }>
  withInstantSearch?: boolean
}

export default function Layout({ children, crumb, withInstantSearch = false }: Props) {
  return (
    <>
      <Meta />
      <HeaderMenu withInstantSearch={withInstantSearch} />
      <Breadcrumb className="pt-8" crumb={crumb} />
      {children}
      <Footer />
    </>
  )
}
