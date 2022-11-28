import clsx from 'clsx'
import { useMenu } from 'react-instantsearch-hooks-web'

export default function CategoryList() {
  const { items, refine } = useMenu({ attribute: 'category', limit: 50 })

  // const noMenuSelected = items.every((category) => category.isRefined === false)

  return (
    <ul role="list" className="space-y-4 pb-6 text-sm font-medium text-gray-900">
      {items.map((category) => (
        <li key={category.value}>
          <button
            onClick={() => refine(category.value)}
            className={clsx(
              category.isRefined ? 'text-primary' : 'text-gray-500 hover:text-gray-700',
              'group flex w-full items-center rounded-md pr-2 py-2 text-sm'
            )}
          >
            {category.label}
            <span
              className={clsx(
                category.isRefined ? 'text-primary' : 'text-gray-400 group-hover:text-gray-700',
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
