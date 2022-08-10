import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import Image from 'next/future/image'
import Link from 'next/link'

import FlyoutMenu from '@/atomic/molecules/FlyoutMenu'
import largeLogo from '@/public/logos/large-terre-rouge.webp'
import smallLogo from '@/public/logos/small-terre-rouge.svg'

interface HeaderProps {
  onMobileMenuClick?: () => void
  onCartClick?: () => void
  className?: string
}

export default function Header(props: HeaderProps) {
  const { onMobileMenuClick, className = '', onCartClick } = props
  return (
    <header className={className}>
      <nav aria-label="Top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo (lg+) */}
            <div className="-mt-8 hidden lg:flex lg:flex-1 lg:items-center">
              <a href="#">
                <span className="sr-only">Terre Rouge</span>
                <Image className="h-24 w-auto" src={largeLogo} alt="" />
              </a>
            </div>

            <div className="hidden h-full lg:flex">
              <FlyoutMenu />
            </div>

            {/* Mobile menu and search (lg-) */}
            <div className="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md p-2 text-gray-400"
                onClick={onMobileMenuClick}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Search */}
              <Link href="/products">
                <a className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Rechercher</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </Link>
            </div>

            {/* Logo (lg-) */}
            <a href="#" className="lg:hidden">
              <span className="sr-only">Workflow</span>
              <Image width={35} height={35} src={smallLogo} alt="Terre Rouge logo" />
            </a>

            <div className="flex flex-1 items-center justify-end">
              <Link href="/products">
                {/* <a className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                  Rechercher
                </a> */}
                <a className="ml-2 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                  <span className="sr-only">Rechercher</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </Link>

              <div className="flex items-center">
                {/* Cart */}
                <div className="ml-4 flow-root">
                  {/* <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">produits dans le panier, voir panier</span>
                  </a> */}
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
    </header>
  )
}
