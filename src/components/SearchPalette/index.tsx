import { getAlgoliaResults } from '@algolia/autocomplete-js'
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions'
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches'
import { Dialog, Transition } from '@headlessui/react'
import algoliasearch from 'algoliasearch/lite'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { Autocomplete } from '../Autocomplete'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_QUERY_SUGGESTIONS = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_QUERY_SUGGESTIONS || ''
const searchClient = algoliasearch(APP_ID, API_KEY)

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchPalette(props: Props) {
  const { open, onClose } = props
  const router = useRouter()

  const recentSearchesPlugin: any = createLocalStorageRecentSearchesPlugin({
    key: 'queries-history',
    limit: 3,
    // @ts-ignore
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ item }: any) {
          router.push('/products?query=' + item.label)
          onClose()
        },
        templates: {
          ...source.templates,
          header({ state }) {
            if (state.query) {
              return null
            }

            return (
              <Fragment>
                <span className="text-primary-light text-sm font-medium">Vos recherches</span>
              </Fragment>
            )
          },
        },
      }
    },
  })
  const querySuggestionsPlugin: any = createQuerySuggestionsPlugin({
    searchClient,
    indexName: INDEX_QUERY_SUGGESTIONS,
    getSearchParams() {
      if (!recentSearchesPlugin)
        return recentSearchesPlugin.data.getAlgoliaSearchParams({
          hitsPerPage: 10,
        })
    },
    // @ts-ignore
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ item }: any) {
          router.push('/products?query=' + item.query)
          onClose()
        },
        templates: {
          ...source.templates,
          header({ state }) {
            if (state.query) {
              return null
            }

            return (
              <Fragment>
                <span className="text-primary-light text-sm font-medium">
                  Recherches populaires
                </span>
              </Fragment>
            )
          },
        },
      }
    },
  })

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto pt-[93px] sm:p-28">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform overflow-hidden bg-white transition-all sm:rounded-md">
              <Autocomplete
                autofocus
                openOnFocus={true}
                plugins={[recentSearchesPlugin, querySuggestionsPlugin]}
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export function ProductItem({ hit, components }: any) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="query" />
        </div>
      </div>
    </a>
  )
}
