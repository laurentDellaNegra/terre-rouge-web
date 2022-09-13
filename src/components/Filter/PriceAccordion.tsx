import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useRange } from 'react-instantsearch-hooks-web'
import Rheostat from 'rheostat'

import { scrollToTop } from '@/lib/window'

export default function PriceAccordion() {
  const { refine, range, start } = useRange({ attribute: 'price', precision: 2 })
  const currentRefinement = {
    min: start[0] as number,
    max: start[1] as number,
  }
  const { min = 0, max = 100 } = range

  const [stateMin, setStateMin] = useState(
    currentRefinement.min === -Infinity ? min : currentRefinement.min
  )
  const [stateMax, setStateMax] = useState(
    currentRefinement.max === Infinity ? max : currentRefinement.max
  )

  useEffect(() => {
    if (currentRefinement.min !== -Infinity && currentRefinement.min !== stateMin)
      setStateMin(currentRefinement.min)
    if (currentRefinement.max !== Infinity && currentRefinement.max !== stateMax)
      setStateMax(currentRefinement.max)
    if (currentRefinement.min === -Infinity && currentRefinement.min !== stateMin) setStateMin(min)
    if (currentRefinement.max === Infinity && currentRefinement.max !== stateMax) setStateMax(max)
  }, [currentRefinement.min, currentRefinement.max])

  const onValuesUpdated = ({ values: [min, max] }: { values: Array<number> }) => {
    setStateMin(min)
    setStateMax(max)
  }

  const handleChange = ({ values: [min, max] }: { values: Array<number> }) => {
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
    <Disclosure as="div" defaultOpen={true} className="py-6">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Prix</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
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
