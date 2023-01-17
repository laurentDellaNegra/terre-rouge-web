import { FunnelIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import {
  useClearRefinements,
  useCurrentRefinements,
  useInstantSearch,
} from 'react-instantsearch-hooks-web'

import IconButton from '@/atomic/atoms/IconButton'

import ClearFilterButton from '../Filter/ClearFilterButton'
import SortMenu from '../SortMenu'
import { Stats } from '../Stats'

interface Props {
  onFilterClick: () => void
  title?: string
}

export default function HeaderProducts(props: Props) {
  const { onFilterClick, title } = props
  const { canRefine } = useClearRefinements()

  const { items } = useCurrentRefinements()
  const nbFilterText =
    items.length > 0 ? `${items.length} Filtre${items.length > 1 ? 's' : ''}` : ''
  return (
    <>
      {/* <div className="py-24 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          <Stats title={title} />
        </h1>
      </div> */}
      {/* <div className="relative grid items-center border-t border-gray-200 pt-6 pb-8"> */}
      <div className="relative grid items-center border-t border-gray-200 pt-6 pb-8 mt-9">
        {/* Clear filter */}
        <div className="relative col-start-1 row-start-1">
          <div className="mx-auto flex max-w-7xl text-sm">
            <>
              <div className="hidden lg:block text-gray-500 pr-4 border-r">{nbFilterText}</div>
              <button
                type="button"
                className="lg:hidden group flex items-center font-medium text-gray-700 pr-4"
                onClick={onFilterClick}
              >
                <span className="sr-only">Filtres</span>
                <FunnelIcon
                  className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                {nbFilterText || 'Filtrer'}
              </button>
              {canRefine && (
                <div className="pl-4 border-l border-gray-200">
                  <ClearFilterButton />
                </div>
              )}
            </>
          </div>
        </div>

        {/* Sort menu */}
        <div className="col-start-1 row-start-1">
          <div className="mx-auto flex max-w-7xl justify-end">
            <SortMenu />
          </div>
        </div>
      </div>
    </>
  )
}
