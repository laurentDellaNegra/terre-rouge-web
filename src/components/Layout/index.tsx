import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Meta from '@/components/Meta'

import Breadcrumb from '../Breadcrumb'

export default function Layout({ children, crumb }: any) {
  return (
    <>
      <Meta />
      <HeaderMenu />
      <main>
        <Breadcrumb className="pt-8 bg-slate-50" crumb={crumb} />
        {children}
      </main>
      <Footer />
    </>
  )
}
