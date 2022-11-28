import { FunnelIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import {
  useClearRefinements,
  useCurrentRefinements,
  useInstantSearch,
} from 'react-instantsearch-hooks-web'

import IconButton from '@/atomic/atoms/IconButton'

import SortMenu from '../SortMenu'
import { Stats } from '../Stats'

interface Props {
  onFilterClick: () => void
}

export default function HeaderProducts(props: Props) {
  const { onFilterClick } = props
  const { refine, canRefine } = useClearRefinements()
  const { items } = useCurrentRefinements()
  const nbFilterText =
    items.length > 0 ? `${items.length} Filtre${items.length > 1 ? 's' : ''}` : ''
  return (
    <>
      <div className="py-24 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Tous nos <Stats />
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
          Tous les produits disponibles dans notre boutique et n&apos;oubliez pas la livraison est
          offerte à partir de <strong>50€</strong> d&apos;achats.
        </p>
      </div>
      <div className="relative grid items-center border-t border-gray-200 pt-6 pb-8">
        {/* Clear filter */}
        <div className="relative col-start-1 row-start-1">
          <div className="mx-auto flex max-w-7xl text-sm space-x-6 divide-x">
            {canRefine ? (
              <>
                <div className="hidden lg:block text-gray-500">{nbFilterText}</div>
                <button
                  type="button"
                  className="pl-6 lg:hidden group flex items-center font-medium text-gray-700"
                  onClick={onFilterClick}
                >
                  <span className="sr-only">Filtres</span>
                  <FunnelIcon
                    className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {nbFilterText}
                </button>
                <div className="pl-6">
                  <button
                    type="button"
                    onClick={refine}
                    className="font-medium text-gray-700 hover:text-gray-900"
                  >
                    Tout effacer
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* <div className="col-start-1 row-start-1">
          <div className="mx-auto flex justify-center">
            <Stats />
          </div>
        </div> */}

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
