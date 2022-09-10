import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useSortBy } from 'react-instantsearch-hooks-web'

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''
const INDEX_NAME_PRICE_ASC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_ASC || ''
const INDEX_NAME_PRICE_DESC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_DESC || ''

const sortOptions = [
  { label: 'Terre rouge présente', value: INDEX_NAME },
  { label: 'Prix croissant', value: INDEX_NAME_PRICE_ASC },
  { label: 'Prix décroissant', value: INDEX_NAME_PRICE_DESC },
]

export default function SortMenu() {
  const sort = useSortBy({ items: sortOptions })
  const { options, currentRefinement, refine } = sort
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Trier par
          <ChevronDownIcon
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {options.map((option) => (
              <Menu.Item key={option.label}>
                {({ active }) => (
                  <button
                    onClick={() => refine(option.value)}
                    className={clsx(
                      active
                        ? 'bg-primary text-white'
                        : currentRefinement === option.value
                        ? 'bg-primary-extra-light text-primary font-medium'
                        : 'text-gray-500',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    )}
                  >
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
