import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'

import useWindowSize from '@/hooks/useWindowSize'
import { getBreakpoint } from '@/lib/tailwindConfig'

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchPalette(props: Props) {
  const { open, onClose } = props

  return (
    <Transition.Root show={open} as="div" appear>
      {/* <Dialog as="div" className="relative" onClose={onClose}> */}
      <Transition.Child
        as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto p-28 z-40">
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <Dialog.Panel className="mx-auto max-w-2xl transform overflow-hidden bg-white transition-all rounded-lg"> */}
          {/* <Autocomplete onClose={onClose} /> */}
          {/* </Dialog.Panel> */}
        </Transition.Child>
      </div>
      {/* </Dialog> */}
    </Transition.Root>
  )
}
