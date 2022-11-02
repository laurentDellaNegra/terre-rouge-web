import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import { Hit } from '@algolia/client-search'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import algoliasearch from 'algoliasearch/lite'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import {
  BaseSyntheticEvent,
  Fragment,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import IconButton from '@/atomic/atoms/IconButton'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_QUERY_SUGGESTIONS = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_QUERY_SUGGESTIONS || ''
const searchClient = algoliasearch(APP_ID, API_KEY)

type AutocompleteItem = any

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchPalette(props: Props) {
  const router = useRouter()
  const { open, onClose } = props
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        onStateChange({ state, prevState }) {
          if (prevState.query !== state.query) {
            setAutocompleteState(state)
          }
        },
        placeholder: 'Que cherchez vous ?',
        getSources() {
          return [
            {
              sourceId: 'test_SHOPIFY',
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: INDEX_QUERY_SUGGESTIONS,
                      query,
                      params: {
                        hitsPerPage: 5,
                      },
                    },
                  ],
                })
              },
              getItemUrl({ item }) {
                return item.url
              },
            },
          ]
        },
      }),
    []
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { getEnvironmentProps } = autocomplete

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined
    }

    const { onTouchStart, onTouchMove } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    })

    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [getEnvironmentProps, formRef, inputRef, panelRef])

  const handleSearch = (item: any) => {
    router.push('/products?query=' + item)
    onClose()
  }

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              {...autocomplete.getRootProps({})}
              className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            >
              <Combobox onChange={handleSearch}>
                <form
                  className="relative flex"
                  ref={formRef}
                  {...autocomplete.getFormProps({ inputElement: inputRef.current })}
                >
                  <div className="flex items-center justify-center pl-4">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      {...autocomplete.getLabelProps({})}
                    />
                  </div>

                  <Combobox.Input
                    ref={inputRef}
                    className="h-12 w-full border-0 bg-transparent px-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    {...autocomplete.getInputProps({ inputElement: inputRef.current })}
                  />
                  {inputRef.current && inputRef.current.value.length > 0 && (
                    <button
                      title="Clear"
                      type="reset"
                      className="text-gray-400 hover:text-gray-500 pr-4"
                    >
                      <span className="sr-only">Effacer la recherche</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                </form>

                {autocompleteState.isOpen && (
                  <div ref={panelRef} {...autocomplete.getPanelProps({})}>
                    <Combobox.Options
                      static
                      className={clsx(
                        autocompleteState.isOpen ? 'block' : 'hidden',
                        'max-h-72 scroll-py-2 overflow-y-auto text-sm text-gray-800 divide-y'
                      )}
                      {...autocomplete.getListProps()}
                    >
                      {autocompleteState.collections.map((collection) => {
                        const { source, items } = collection
                        return items.map((item) => (
                          <Combobox.Option
                            key={item.objectID}
                            className={({ active }) =>
                              clsx(
                                'cursor-default select-none px-4 py-2',
                                active && 'text-primary bg-slate-50'
                              )
                            }
                            value={item.query}
                            {...autocomplete.getItemProps({
                              item,
                              source,
                            })}
                          >
                            {item.query}
                          </Combobox.Option>
                        ))
                      })}
                      <Combobox.Option value={inputRef?.current?.value} />
                    </Combobox.Options>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
