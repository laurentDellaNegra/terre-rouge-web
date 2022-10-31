import clsx from 'clsx'
import { useMenu } from 'react-instantsearch-hooks-web'

export default function CategoryList() {
  const { items, refine } = useMenu({ attribute: 'category' })

  // const noMenuSelected = items.every((category) => category.isRefined === false)

  return (
    <ul role="list" className="space-y-4 pb-6 text-sm font-medium text-gray-900">
      {items.map((category) => (
        <li key={category.value}>
          <button
            onClick={() => refine(category.value)}
            className={clsx(
              category.isRefined
                ? 'bg-primary-extra-light text-primary font-medium'
                : 'text-gray-500 hover:bg-primary hover:text-white',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm'
            )}
          >
            {category.label}
            <span
              className={clsx(
                category.isRefined
                  ? 'bg-primary-extra-light text-primary'
                  : 'text-gray-400 group-hover:text-white',
                'pl-2'
              )}
            >
              ({category.count})
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
