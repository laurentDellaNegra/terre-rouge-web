import clsx from 'clsx'
import { useState } from 'react'

import TrustBox from '@/components/TrustBox'
import Header from '@/components/UI/Header'
import MobileMenu from '@/components/UI/MobileMenu'
import SlideOverCart from '@/components/UI/SlideOverCart'
import useUIState from '@/context/UIState/useUIState'
import useScrollDirection from '@/hooks/useScrollDirection'

import CouponBanner from '../CouponBanner'

interface Props {
  withInstantSearch: boolean
}

export default function HeaderMenu({ withInstantSearch }: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openCartPanel, toggleCartPanel } = useUIState()

  const scrollDirection = useScrollDirection()
  const isScrolled = scrollDirection !== null

  return (
    <div
      className={clsx('sticky z-40 transition-all duration-500', {
        'top-0': scrollDirection === 'up',
        '-top-[117.12px] sm:-top-[125.12px]': scrollDirection === 'down', // with CouponBanner
        // '-top-[93.12px] sm:-top-[101.12px]': scrollDirection === 'down',
      })}
    >
      <CouponBanner>
        <strong>-15%</strong> avec le code <strong>TERRE15</strong>
      </CouponBanner>
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
        onCartClick={toggleCartPanel}
        withInstantSearch={withInstantSearch}
      />
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SlideOverCart open={openCartPanel} onClose={toggleCartPanel} />
    </div>
  )
}
