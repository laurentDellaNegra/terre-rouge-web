import { Dialog, Disclosure, Tab, Transition } from '@headlessui/react'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

interface MobileMenuProps {
  open?: boolean
  onClose?: () => void
}
export default function MobileMenu(props: MobileMenuProps) {
  const { open = false, onClose = () => {} } = props
  const router = useRouter()
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={onClose}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <nav className="space-y-1 pt-2 pb-3">
                <ul>
                  <li>
                    <Link href="/">
                      <a
                        className={clsx(
                          router.pathname === '/'
                            ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                      >
                        Accueil
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a
                        className={clsx(
                          router.pathname === '/products'
                            ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                      >
                        Epices
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a
                        className={clsx(
                          router.pathname === '/products2'
                            ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                      >
                        Condiments
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a
                        className={clsx(
                          router.pathname === '/products2'
                            ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                      >
                        Art de la table
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a
                        className={clsx(
                          router.pathname === '/products3'
                            ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                      >
                        Engagement
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
