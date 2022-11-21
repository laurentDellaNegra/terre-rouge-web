import { autocomplete } from '@algolia/autocomplete-js'
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions'
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches'
import { useRouter } from 'next/router'
import { pipe } from 'ramda'
import React, { Fragment, createElement, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

import { groupBy } from './functions/groupBy'
import { limit } from './functions/limit'
import { uniqBy } from './functions/uniqBy'
import { productsPlugin } from './productsPlugin'
import { searchClient } from './searchClient'
import { ProductHit } from './types/ProductHit'

const INDEX_QUERY_SUGGESTIONS = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_QUERY_SUGGESTIONS || ''

interface Props {
  onClose?: () => void
}

export function Autocomplete(props: Props) {
  const { onClose = () => {} } = props
  const containerRef: any = useRef(null)
  const panelRootRef: any = useRef(null)
  const rootRef: any = useRef(null)
  const router = useRouter()

  const recentSearchesPlugin: any = createLocalStorageRecentSearchesPlugin({
    key: 'search',
    limit: 3,
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ item }) {
          router.push('/products?query=' + item.label)
          onClose()
        },
      }
    },
  })
  const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: INDEX_QUERY_SUGGESTIONS,
    getSearchParams() {
      if (!recentSearchesPlugin)
        return recentSearchesPlugin.data.getAlgoliaSearchParams({
          hitsPerPage: 10,
        })
    },
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ item }: any) {
          router.push('/products?query=' + item.query)
          onClose()
        },
      }
    },
  })

  const dedupeAndLimitSuggestions = pipe(
    // @ts-ignore
    uniqBy(({ source, item }) =>
      source.sourceId === 'querySuggestionsPlugin' ? item.query : item.label
    ),
    limit(4)
  )

  const groupByCategory = groupBy((hit: ProductHit) => hit.category, {
    getSource({ name, items }: any) {
      return {
        getItems() {
          return items.slice(0, 3)
        },
        templates: {
          header() {
            return (
              <Fragment>
                <span className="aa-SourceHeaderTitle">{name}</span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            )
          },
        },
      }
    },
  })

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    const search = autocomplete({
      placeholder: 'Rechercher',
      autoFocus: true,
      openOnFocus: true,
      container: containerRef.current,
      onSubmit: ({ state }) => {
        router.push('/products?query=' + state.query)
        onClose()
      },
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root

          panelRootRef.current?.unmount()
          panelRootRef.current = createRoot(root)
        }

        panelRootRef.current.render(children)
      },
      classNames: {
        root: 'font-sans',
        form: 'outline-none bg-white rounded-lg border-slate-200 overflow-hidden',
        inputWrapper: 'bg-white',
        inputWrapperPrefix: 'bg-white rounded-l-lg',
        inputWrapperSuffix: 'bg-white rounded-r-lg',
        input: 'focus:ring-0',
        panel: 'z-40 mt-2 rounded-lg',
        panelLayout: 'text-gray-600',
        detachedSearchButtonPlaceholder: 'text-gray-400 sm:text-base font-normal',
        detachedSearchButtonIcon: 'text-gray-400',
        detachedSearchButton: 'rounded-lg border-none ring-1 ring-slate-200 hover:ring-slate-300',
        detachedCancelButton: 'text-gray-500',
      },
      translations: {
        detachedCancelButtonText: 'Fermer',
      },
      plugins: [recentSearchesPlugin, querySuggestionsPlugin, productsPlugin],
      // @ts-ignore
      reshape({ sourcesBySourceId }) {
        const { recentSearchesPlugin, querySuggestionsPlugin, products, ...rest } =
          sourcesBySourceId

        return [
          dedupeAndLimitSuggestions(recentSearchesPlugin, querySuggestionsPlugin),
          groupByCategory(products),
          Object.values(rest),
        ]
      },
    })

    return () => {
      search.destroy()
    }
  }, [])

  return <div ref={containerRef} />
}
