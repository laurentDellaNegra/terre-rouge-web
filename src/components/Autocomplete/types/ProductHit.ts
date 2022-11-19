import { Hit } from '@algolia/client-search'

import { ProductRecord } from '@/types/ProductRecord'

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string
  __autocomplete_queryID: string
}

export type ProductHit = WithAutocompleteAnalytics<Hit<ProductRecord>>
