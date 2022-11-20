import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SearchPalette from '@/components/SearchPalette'
import useUIState from '@/context/UIState/useUIState'
import useCmdK from '@/hooks/useCmdK'
import largeLogo from '@/public/logos/large-terre-rouge.webp'
import smallLogo from '@/public/logos/small-terre-rouge.svg'

interface HeaderProps {
  onMobileMenuClick?: () => void
  onCartClick?: () => void
  className?: string
}

export default function Header(props: HeaderProps) {
  const { onMobileMenuClick, className = '', onCartClick } = props
  const { openSearchPalette, toggleSearch } = useUIState()
  const router = useRouter()
  const displaySearch = router.pathname !== '/products'
  useCmdK(() => toggleSearch())
  return (
    <header className={className}>
      <nav aria-label="Top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo (lg+) */}
            <div className="-mt-8 hidden lg:flex lg:flex-1 lg:items-center">
              <Link href="/">
                <span className="sr-only">Terre Rouge</span>
                <Image className="h-24 w-auto" src={largeLogo} alt="" />
              </Link>
            </div>

            <div className="hidden h-full lg:flex">
              {/* <FlyoutMenu /> */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/products"
                  className={clsx(
                    router.pathname === '/products'
                      ? 'border-primary text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Epices
                </Link>
                <Link
                  href="/products"
                  className={clsx(
                    router.pathname === '/products1'
                      ? 'border-primary text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Comdiments
                </Link>
                <Link
                  href="/products"
                  className={clsx(
                    router.pathname === '/products2'
                      ? 'border-primary text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Arts de table
                </Link>
                <Link
                  href="/products"
                  className={clsx(
                    router.pathname === '/products3'
                      ? 'border-primary text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Engagement
                </Link>
              </div>
            </div>

            {/* Mobile menu and search (lg-) */}
            <div className="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md p-2 text-gray-400"
                onClick={onMobileMenuClick}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {displaySearch && (
                <button
                  type="button"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={toggleSearch}
                >
                  <span className="sr-only">Rechercher</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Logo (lg-) */}
            <Link href="/" className="lg:hidden">
              <span className="sr-only">Workflow</span>
              <Image className="h-auto w-9" src={smallLogo} alt="Terre Rouge logo" />
            </Link>

            <div className="flex flex-1 items-center justify-end">
              {displaySearch && (
                <button
                  type="button"
                  className="ml-2 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
                  onClick={toggleSearch}
                >
                  <span className="sr-only">Rechercher</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}

              <div className="flex items-center">
                {/* Cart */}
                <div className="ml-4 flow-root">
                  <button
                    type="button"
                    className="group -m-2 flex items-center p-2"
                    onClick={onCartClick}
                  >
                    <span className="sr-only">Open cart</span>
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">produits dans le panier, voir panier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <SearchPalette onClose={toggleSearch} open={openSearchPalette} />
    </header>
  )
}
