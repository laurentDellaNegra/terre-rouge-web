import { XIcon } from '@heroicons/react/solid'
import { useClearRefinements } from 'react-instantsearch-hooks-web'

export default function ClearFilterButton() {
  const { refine, canRefine, createURL } = useClearRefinements()
  return canRefine ? (
    <button
      onClick={refine}
      className="flex py-2 gap-2 w-full bg-transparent rounded-full border-2 border-red-400 text-red-400 justify-center hover:bg-red-50 hover:text-red-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-red-400"
    >
      <XIcon className="h-6 w-6" aria-hidden="true" />
      Réinitialiser les filtres
    </button>
  ) : null
}
