import { useEffect, useState } from 'react'

import Header from '@/atomic/organisms/Header'
import MobileMenu from '@/atomic/organisms/MobileMenu'
import TrustBox from '@/components/TrustBox'
import useScrollDirection from '@/hooks/useScrollDirection'

interface Props {
  reviews: any
}

export default function HeaderMenu(props: Props) {
  const { reviews } = props
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollDirection = useScrollDirection()

  return (
    <>
      <TrustBox
        scrollDirection={scrollDirection}
        nbReviews={reviews.nbReviews}
        rating={reviews.rating}
      />
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Header scrollDirection={scrollDirection} onMobileMenuClick={() => setMobileMenuOpen(true)} />
    </>
  )
}
