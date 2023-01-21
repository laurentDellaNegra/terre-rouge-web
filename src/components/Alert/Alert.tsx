import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  className?: string
  show: boolean
  error?: boolean
  children: ReactNode
  onHide: () => void
}

export default function Alert({
  children,
  onHide,
  error = false,
  show = false,
  className = '',
}: Props) {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={clsx('rounded-md bg-red-50 p-4', className)}>
        <div className="flex">
          <div className="flex-shrink-0">
            {error ? (
              <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            ) : (
              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
            )}
          </div>
          <div className="ml-3">
            <p className={clsx(error ? 'text-red-800' : 'text-green-800', 'text-sm font-medium')}>
              {children}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={clsx(
                  error
                    ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50'
                    : 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2'
                )}
                onClick={onHide}
              >
                <span className="sr-only">Cacher</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}
