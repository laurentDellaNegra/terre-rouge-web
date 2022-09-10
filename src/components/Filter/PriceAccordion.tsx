import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useRange } from 'react-instantsearch-hooks-web'
import Rheostat from 'rheostat'

import { scrollToTop } from '@/lib/window'

export default function PriceAccordion() {
  const { refine, range, start, canRefine } = useRange({ attribute: 'price', min: 0, precision: 2 })
  const currentRefinement = {
    min: start[0] as number,
    max: start[1] as number,
  }
  const { min, max } = range

  const [stateMin, setStateMin] = useState(min || 0)
  const [stateMax, setStateMax] = useState(max || 100)

  const onValuesUpdated = ({ values: [min, max] }: { values: Array<number> }) => {
    setStateMin(min)
    setStateMax(max)
  }

  const handleChange = ({ values: [min, max] }: { values: Array<number> }) => {
    console.log('handleChange', [min, max])
    // Check if we put button slider too close, we reset with currentRefinement
    if (min >= max) {
      refine([currentRefinement.min, currentRefinement.max])
      scrollToTop()
    } else if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine([min, max])
      scrollToTop()
    }
  }

  if (min === max) {
    return null
  }

  return (
    <Disclosure as="div" defaultOpen={true} className="border-b border-gray-200 py-6">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Prix</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4 px-2">
              <Rheostat
                min={range.min}
                max={range.max}
                values={[stateMin, stateMax]}
                onChange={handleChange}
                onValuesUpdated={onValuesUpdated}
              />
              <div className="flex justify-between text-gray-500">
                <div>{stateMin}</div>
                <div>{stateMax}</div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
