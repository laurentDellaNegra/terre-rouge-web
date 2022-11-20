import { AutocompleteComponents, getAlgoliaResults } from '@algolia/autocomplete-js'
import Link from 'next/link'
import { Fragment } from 'react'

import { price } from '@/lib/price'
import { ProductRecord } from '@/types/ProductRecord'
import { CurrencyCode } from '@/types/gql/graphql'

import { searchClient } from './searchClient'
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
                <span className="aa-SourceHeaderTitle">Products</span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            )
          },
          item({ item, components }: any) {
            return <ProductItem hit={item} components={components} />
          },
          noResults() {
            return 'No products for this query.'
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
    <Link href={hit.handle} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--picture aa-ItemIcon--alignTop">
          <img src={hit.image} alt={hit.title} width="40" height="40" />
        </div>

        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Snippet hit={hit} attribute="title" />
          </div>
          <div className="aa-ItemContentDescription">
            In <strong>{hit.category}</strong>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <div>
                <span
                  style={{
                    color: '#000',
                    fontSize: '0.9em',
                    fontWeight: 'bold',
                  }}
                >
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
