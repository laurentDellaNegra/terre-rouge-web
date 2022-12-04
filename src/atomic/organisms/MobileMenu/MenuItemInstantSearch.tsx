import clsx from 'clsx'
import { useMenu } from 'react-instantsearch-hooks-web'

interface Props {
  name: string
}
export default function MenuItemInstantSearch({ name }: Props) {
  const { refine } = useMenu({
    attribute: 'category',
    limit: 50,
    sortBy: ['name'],
  })
  return (
    <button
      onClick={() => refine(name)}
      className={clsx(false ? 'text-primary' : 'text-gray-500 hover:text-gray-700')}
    >
      {name}
    </button>
  )
}
