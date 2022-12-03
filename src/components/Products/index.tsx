import { useState } from 'react'
import { useHits } from 'react-instantsearch-hooks-web'

import FilterAside from '@/components/Filter/FilterAside'
import FilterDrawer from '@/components/Filter/FilterDrawer'
import ProductCard from '@/components/ProductCard'
import ProductsPagination from '@/components/ProductsPagination'

import { Stats } from '../Stats'
import HeaderProducts from './HeaderProducts'

interface Props {
  title?: string
}

export default function Products(props: Props) {
  const { title } = props
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { hits } = useHits()
  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <FilterDrawer open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header products */}
        <HeaderProducts title={title} onFilterClick={() => setMobileFiltersOpen(true)} />

        <section aria-labelledby="products-heading" className="pb-24">
          {/* SEO */}
          <h2 id="products-heading" className="sr-only">
            <Stats title={title} />
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
