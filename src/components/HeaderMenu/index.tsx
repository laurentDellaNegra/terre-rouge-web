import { useState } from 'react'

import Header from '@/atomic/organisms/Header'
import MobileMenu from '@/atomic/organisms/MobileMenu'

export default function HeaderMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <MobileMenu open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Header onMobileMenuClick={() => setMobileMenuOpen(true)} />
    </>
  )
}
