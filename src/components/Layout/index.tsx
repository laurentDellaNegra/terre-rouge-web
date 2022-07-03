import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import Meta from '@/components/Meta'

export default function Layout({ reviews, children }: any) {
  return (
    <>
      <Meta />
      <HeaderMenu reviews={reviews} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
