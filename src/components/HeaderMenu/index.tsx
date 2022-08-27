import clsx from 'clsx'
import { useState } from 'react'

import Header from '@/atomic/organisms/Header'
import MobileMenu from '@/atomic/organisms/MobileMenu'
import SlideOverCart from '@/atomic/organisms/SlideOverCart'
import TrustBox from '@/components/TrustBox'
import useScrollDirection from '@/hooks/useScrollDirection'

export default function HeaderMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)

  const scrollDirection = useScrollDirection()
  const isScrolled = scrollDirection !== null

  return (
    <div
      className={clsx('sticky z-40 transition-all duration-500', {
        'top-0': scrollDirection === 'up',
        '-top-[93.12px] sm:-top-[101.12px]': scrollDirection === 'down',
      })}
    >
      <TrustBox
        className={clsx(
          isScrolled &&
            'bg-primary-extra-light/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-primary-extra-light/75',
          !isScrolled && 'bg-primary-extra-light'
        )}
      />
      <Header
        className={clsx(
          isScrolled &&
            'bg-white/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-white/90',
          !isScrolled && 'bg-white'
        )}
        onMobileMenuClick={() => setMobileMenuOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SlideOverCart open={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
