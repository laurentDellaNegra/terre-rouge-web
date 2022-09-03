import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

export const subCategories = [
  { name: 'Tous', href: '#' },
  { name: 'Épice', href: '#' },
  { name: 'Produits malagasy', href: '#' },
  { name: 'Chocolat', href: '#' },
  { name: 'Vanille', href: '#' },
  { name: 'Coffret', href: '#' },
]
export const filters = [
  {
    id: 'price',
    name: 'Prix',
    options: [
      { value: '0', label: '0€ - 3€', checked: false },
      { value: '3', label: '3€ - 6€', checked: false },
      { value: '6', label: '6€ - 10€', checked: false },
      { value: '10', label: '+10€', checked: false },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
]

export default function FilterAside() {
  return (
    <aside>
      <form className="hidden lg:block sticky top-32">
        <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href}>{category.name}</a>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{section.name}</span>
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
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary-light"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </aside>
  )
}
