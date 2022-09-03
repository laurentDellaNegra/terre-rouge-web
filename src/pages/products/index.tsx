import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query'
import algoliasearch from 'algoliasearch/lite'
import { IncomingMessage } from 'http'
import { history } from 'instantsearch.js/es/lib/routers/index.js'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { getServerState } from 'react-instantsearch-hooks-server'
import {
  Configure,
  Hits,
  InstantSearch,
  InstantSearchSSRProvider,
  Pagination,
  RefinementList,
  SearchBox,
  SortBy,
} from 'react-instantsearch-hooks-web'

import Hit from '@/components/Hit'
import Layout from '@/components/Layout'
import ProductsComponent from '@/components/Products'
import { getShopPageForHome } from '@/lib/api'
import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'
import { getTrustpilotReviews } from '@/lib/trustpilot'
import { useGetShopPageForHomeQuery } from '@/types/Shopify'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''
const INDEX_NAME_PRICE_ASC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_ASC || ''
const INDEX_NAME_PRICE_DESC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_DESC || ''

const searchClient = algoliasearch(APP_ID, API_KEY)

// TODO: Use useHits to create custom components and have more control

export default function Products(props: any) {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <ProductsBody {...props} />
      </Layout>
    </>
  )
}

export function ProductsBody({ serverState, url }: any) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        routing={{
          router: history({
            getLocation: () =>
              typeof window === 'undefined'
                ? (new URL(url!) as unknown as Location)
                : window.location,
          }),
        }}
      >
        {/* <SearchBox />
        <SortBy
          items={[
            { label: 'Featured', value: INDEX_NAME },
            { label: 'Price (asc)', value: INDEX_NAME_PRICE_ASC },
            { label: 'Price (desc)', value: INDEX_NAME_PRICE_DESC },
          ]}
        />
        <RefinementList attribute="category" />
        <Hits hitComponent={Hit} />
      <Pagination /> */}
        <Configure hitsPerPage={20} />
        <ProductsComponent />
      </InstantSearch>
    </InstantSearchSSRProvider>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context
  const protocol = req.headers.referer?.split('://')[0] || 'https'
  const url = `${protocol}://${req.headers.host}${req.url}`

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetShopPageForHomeQuery.getKey(),
    useGetShopPageForHomeQuery.fetcher(graphQLRequestClient)
  )
  await queryClient.prefetchQuery(['reviews'], getTrustpilotReviews)
  const dehydratedState = dehydrate(queryClient)

  const serverState = await getServerState(<ProductsBody url={url} />)
  return {
    props: {
      dehydratedState,
      serverState,
      url,
    },
  }
}
