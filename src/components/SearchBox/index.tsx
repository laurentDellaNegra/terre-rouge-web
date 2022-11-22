import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { UseSearchBoxProps, useSearchBox } from 'react-instantsearch-hooks-web'

export default function SearchBox(props: UseSearchBoxProps) {
  const { query, refine, clear } = useSearchBox(props)

  return (
    <div className="flex-1 flex items-center">
      <MagnifyingGlassIcon
        className="h-6 w-6 text-gray-400 group-focus-within:text-primary"
        aria-hidden="true"
      />
      <input
        type="search"
        name="name"
        id="name"
        value={query}
        onChange={(e) => refine(e.target.value)}
        className="bg-transparent block border-0 focus:ring-0 sm:text-sm"
        placeholder="Que cherchez vous ?"
      />
      {query.length > 0 && (
        <button
          title="Clear"
          type="reset"
          onClick={clear}
          className="text-gray-400 hover:text-gray-500 pr-4"
        >
          <span className="sr-only">Effacer la recherche</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
