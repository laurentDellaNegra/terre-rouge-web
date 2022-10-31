import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useHits } from 'react-instantsearch-hooks-web'
import { useSearchBox } from 'react-instantsearch-hooks-web'

import IconButton from '@/atomic/atoms/IconButton'
import TitleSection from '@/atomic/atoms/TitleSection'
import FilterAside from '@/components/Filter/FilterAside'
import FilterDrawer from '@/components/Filter/FilterDrawer'
import ProductCard from '@/components/ProductCard'
import ProductsPagination from '@/components/ProductsPagination'
import SortMenu from '@/components/SortMenu'

import SearchBox from '../SearchBox'

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { hits } = useHits()
  return (
    <div className="bg-gray-50">
      {/* Mobile filter dialog */}
      <FilterDrawer open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex gap-5 items-baseline justify-between pt-24 pb-6">
          {/* Title */}
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Tous nos produits
          </h1> */}
          {/* <TitleSection>Tous nos produits</TitleSection> */}
          {/* <SearchBox
            placeholder="Que cherchez vous ?"
            autoFocus
            searchAsYouType={false}
            submitIconComponent={() => (
              <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            )}
          /> */}
          <SearchBox />

          {/* Right menu */}
          <div className="flex items-center">
            {/* Sort Menu */}
            <SortMenu />

            {/* Filter Icon */}
            <IconButton onClick={() => setMobileFiltersOpen(true)}>
              <span className="sr-only">Filtres</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </IconButton>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          {/* SEO */}
          <h2 id="products-heading" className="sr-only">
            Produits
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 pb-36">
            {/* Filters */}
            <FilterAside />

            {/* Product grid */}
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
              {hits.map((product: any, index) => (
                <ProductCard key={product.title} product={product} position={index} />
              ))}
            </div>
          </div>
          {/* Pagination */}
          <ProductsPagination />
        </section>
      </main>
    </div>
  )
}
