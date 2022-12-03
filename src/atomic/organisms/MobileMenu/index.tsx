import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useMenu } from 'react-instantsearch-hooks-web'

import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { getMenuCollections } from '@/lib/menu'
import { CollectionEdge } from '@/types/gql/graphql'

interface MobileMenuProps {
  open?: boolean
  onClose?: () => void
}
export default function MobileMenu(props: MobileMenuProps) {
  const { open = false, onClose = () => {} } = props
  const router = useRouter()
  const { refine, items, createURL } = useMenu({
    attribute: 'category',
    limit: 50,
    sortBy: ['name'],
  })
  const { data } = useQuery([GET_SHOP_QUERY_KEY], getShop)
  if (!data) return null
  const { collections } = data
  const navigation = {
    collections: getMenuCollections(collections.edges as Array<CollectionEdge>),
    pages: [{ name: 'Engagements', href: '/engagements' }],
  }
  console.log('router', router)
  console.log('items', items)
  console.log('link', navigation.collections[0].categories[0].name)
  console.log('createURL', createURL(navigation.collections[0].name))
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
                  <span className="sr-only">Fermer le menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              {navigation.collections.map((collection, collectionIdx) => (
                <div key={collection.name} className="space-y-6 px-4 pt-5 pb-6">
                  <p id={`mobile-collection-heading-${collectionIdx}`} className="flow-root">
                    <Link
                      href={collection.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {collection.name}
                    </Link>
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="mobile-collection-heading"
                    className="mt-3 space-y-3"
                  >
                    {collection.categories.map((item) => (
                      <li key={item.name} className="flex">
                        {router.pathname === collection.href ? (
                          <button
                            onClick={() => refine(item.name)}
                            className={clsx(
                              false ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
                            )}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link href={item.href} className="text-gray-500">
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Pages */}
              <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
