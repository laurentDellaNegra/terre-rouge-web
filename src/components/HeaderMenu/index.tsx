import { useEffect, useState } from 'react'

import Header from '@/atomic/organisms/Header'
import MobileMenu from '@/atomic/organisms/MobileMenu'
import TrustBox from '@/components/TrustBox'

interface Props {
  reviews: any
}

export default function HeaderMenu(props: Props) {
  const { reviews } = props
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <TrustBox isScrolled={isScrolled} nbReviews={reviews.nbReviews} rating={reviews.rating} />
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Header isScrolled={isScrolled} onMobileMenuClick={() => setMobileMenuOpen(true)} />
    </>
  )
}
