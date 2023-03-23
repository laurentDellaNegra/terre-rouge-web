import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Autocomplete from '@/components/Autocomplete/Autocomplete'
import AutocompleteWithInstantSearch from '@/components/Autocomplete/AutocompleteWithInstantSearch'
import useGetCart from '@/context/ShopifyClient/getCart/useGetCart'
import useUIState from '@/context/UIState/useUIState'
import { MENU_ROOT } from '@/lib/menu'
import largeLogo from '@/public/logos/large-terre-rouge.webp'
import smallLogo from '@/public/logos/small-terre-rouge.svg'

interface HeaderProps {
  onMobileMenuClick?: () => void
  onCartClick?: () => void
  className?: string
  withInstantSearch: boolean
}

export default function Header(props: HeaderProps) {
  const { onMobileMenuClick, className = '', onCartClick, withInstantSearch } = props
  const { openSearchPalette, toggleSearch } = useUIState()
  const router = useRouter()
  const { data: cart } = useGetCart()

  return (
    <>
      <header className={clsx('relative', className)}>
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
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
                  {MENU_ROOT.map((menuItem) => (
                    <Link
                      key={menuItem.href}
                      href={menuItem.href}
                      className={clsx(
                        router.pathname === menuItem.href
                          ? 'border-primary text-gray-900'
                          : 'text-gray-500 border-white hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                    >
                      {menuItem.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu and search (lg-) */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 rounded-md p-2 text-gray-400"
                  onClick={onMobileMenuClick}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Logo (lg-) */}
              <Link href="/" className="lg:hidden">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-auto w-6 sm:w-7 ml-1 mr-2 sm:mx-3"
                  src={smallLogo}
                  alt="Terre Rouge logo"
                />
              </Link>

              {/* Search (lg-) */}
              <div className="flex-1 ml-2 sm:ml-3 lg:hidden">
                {withInstantSearch ? <AutocompleteWithInstantSearch /> : <Autocomplete />}
              </div>

              <div className="flex lg:flex-1 items-center justify-end">
                <button
                  type="button"
                  className="ml-2 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
                  onClick={() => toggleSearch()}
                >
                  <span className="sr-only">Rechercher</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>

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
                        {cart?.totalQuantity || 0}
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
      {/* Move this in it component */}
      <div
        className={clsx(
          openSearchPalette ? 'absolute' : 'hidden',
          'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 left-0 right-0 h-full '
        )}
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm transition-opacity"
          onClick={() => toggleSearch()}
        />
        {/* hack to Block scroll */}
        <style jsx global>{`
          body {
            overflow-y: ${openSearchPalette ? 'hidden' : 'auto'};
          }
        `}</style>
        {withInstantSearch ? <AutocompleteWithInstantSearch /> : <Autocomplete />}
      </div>
    </>
  )
}
