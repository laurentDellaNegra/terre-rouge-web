import { XMarkIcon } from '@heroicons/react/24/solid'
import { useClearRefinements } from 'react-instantsearch-hooks-web'

export default function ClearFilterButton() {
  const { refine, canRefine, createURL } = useClearRefinements()
  return canRefine ? (
    <button
      type="button"
      onClick={refine}
      className="text-sm font-medium text-gray-700 hover:text-gray-900"
    >
      Tout effacer
    </button>
  ) : null
}
