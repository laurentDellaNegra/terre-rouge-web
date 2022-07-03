import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Meta from '@/components/Meta'

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <HeaderMenu />
      <main>{children}</main>
      <Footer />
    </>
  )
}
