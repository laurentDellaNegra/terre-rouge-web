import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { useRefinementList } from 'react-instantsearch-hooks-web'

export function TagsAccordion() {
  const { items: tags, refine: refineTags } = useRefinementList({
    attribute: 'tags',
    limit: 1000,
  })
  return (
    <Disclosure as="div" className="py-6">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Tags</span>
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
            <div className="space-y-4">
              {tags.map((tag, index) => (
                <div key={tag.value} className="flex items-center">
                  <input
                    id={`filter-${tag.label}`}
                    name={`${tag.label}[]`}
                    defaultValue={tag.value}
                    type="checkbox"
                    defaultChecked={tag.isRefined}
                    onChange={() => {
                      refineTags(tag.value)
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary-light"
                  />
                  <label htmlFor={`filter-${tag.label}`} className="ml-3 text-sm text-gray-600">
                    {tag.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
