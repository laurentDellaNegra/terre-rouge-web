import { AutocompleteComponents, getAlgoliaResults } from '@algolia/autocomplete-js'
import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import { searchClient } from '@/lib/clients/searchClient'
import { price } from '@/lib/price'
import { ProductRecord } from '@/types/ProductRecord'
import { CurrencyCode } from '@/types/gql/graphql'

import { ProductHit } from './types/ProductHit'

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''

export const productsPlugin = {
  getSources({ query }: { query: string }) {
    if (!query) {
      return []
    }

    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults<ProductRecord>({
            searchClient,
            queries: [
              {
                indexName: INDEX_NAME,
                query,
                params: {
                  clickAnalytics: true,
                  attributesToSnippet: ['name:10', 'description:35'],
                  snippetEllipsisText: '…',
                  hitsPerPage: 15,
                },
              },
            ],
          })
        },
        templates: {
          header() {
            return (
              <Fragment>
                <span className="aa-SourceHeaderTitle">Produits</span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            )
          },
          item({ item, components }: any) {
            return <ProductItem hit={item} components={components} />
          },
          noResults() {
            return 'Pas de résultats pour cette requête.'
          },
        },
      },
    ]
  },
}

type ProductItemProps = {
  hit: ProductHit
  components: AutocompleteComponents
}

function ProductItem({ hit, components }: ProductItemProps) {
  return (
    <Link href={`/produit/${hit.handle}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--picture aa-ItemIcon--alignTop !border-gray-200 rounded-md">
          {hit.image ? (
            <Image src={hit.image} alt={hit.title} width={70} height={70} />
          ) : (
            <PhotoIcon className="!h-16 !w-16 text-gray-200" />
          )}
        </div>

        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Snippet hit={hit} attribute="title" />
          </div>
          <div className="aa-ItemContentDescription">
            Dans <strong>{hit.category}</strong>
          </div>

          <div className="flex items-center gap-2">
            <div className="grid grid-flow-col justify-start items-center gap-1">
              <div>
                <span className="text-gray-900 font-bold text-sm">
                  {price(hit.price, hit.currency as CurrencyCode)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
