import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect, useRef, useState } from 'react'

import CategoryList from './CategoryList'
import ClearFilterButton from './ClearFilterButton'
import PriceAccordion from './PriceAccordion'
import { TagsAccordion } from './TagsAccordion'

interface Props {
  open: boolean
  onClose: () => void
}

export default function FilterDrawer(props: Props) {
  const { open, onClose } = props
  const [unmountOnInit, setUnmountOnInit] = useState(true)
  // Hack to avoid focustrap error and keep the focus
  useEffect(() => {
    if (open) setUnmountOnInit(false)
  }, [open])
  return (
    <Transition.Root unmount={unmountOnInit} show={open} as={Fragment}>
      <Dialog static as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          unmount={false}
          static
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            unmount={false}
            static
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={onClose}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <div className="mt-4 border-t border-gray-200" onSubmit={(e) => e.preventDefault()}>
                <h3 className="sr-only">Categories</h3>

                <div className="px-4 py-3">
                  <ClearFilterButton />
                </div>

                <div className="px-2 py-3 border-b border-gray-200">
                  <CategoryList />
                </div>

                <div className="px-4 border-b border-gray-200">
                  <PriceAccordion />
                </div>
                <div className="px-4 border-b border-gray-200">
                  <TagsAccordion />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
