import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Meta from '@/components/Meta'

import Breadcrumb from '../Breadcrumb'

export default function Layout({ children, crumb }: any) {
  return (
    <>
      <Meta />
      <HeaderMenu />
      <Breadcrumb className="pt-8 bg-white" crumb={crumb} />
      {children}
      <Footer />
    </>
  )
}
