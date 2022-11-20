import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

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
                    <Link
                      href="/"
                      className={clsx(
                        router.pathname === '/'
                          ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className={clsx(
                        router.pathname === '/products'
                          ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                    >
                      Epices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className={clsx(
                        router.pathname === '/products2'
                          ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                    >
                      Condiments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className={clsx(
                        router.pathname === '/products2'
                          ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                    >
                      Arts de table
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className={clsx(
                        router.pathname === '/products3'
                          ? 'border-primary-light bg-primary-extra-light  text-primary-dark'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                    >
                      Engagement
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
