import clsx from 'clsx'
import { useState } from 'react'

import Header from '@/atomic/organisms/Header'
import MobileMenu from '@/atomic/organisms/MobileMenu'
import SlideOverCart from '@/atomic/organisms/SlideOverCart'
import TrustBox from '@/components/TrustBox'
import useUIState from '@/context/UIState/useUIState'
import useScrollDirection from '@/hooks/useScrollDirection'

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
        onCartClick={toggleCartPanel}
        withInstantSearch={withInstantSearch}
      />
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SlideOverCart open={openCartPanel} onClose={toggleCartPanel} />
    </div>
  )
}
