import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { UseSearchBoxProps, useSearchBox } from 'react-instantsearch-hooks-web'

export default function SearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props)

  return (
    <div className="group border-b-2 border-gray-300 focus-within:border-primary flex-1 flex items-center">
      <MagnifyingGlassIcon
        className="h-6 w-6 text-gray-400 group-focus-within:text-primary"
        aria-hidden="true"
      />
      <input
        type="search"
        name="name"
        id="name"
        className="bg-transparent block w-full border-0 focus:ring-0 sm:text-sm"
        placeholder="Que cherchez vous ?"
      />
    </div>
  )
}
