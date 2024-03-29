import { QueryClient, dehydrate } from '@tanstack/react-query'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { getServerState } from 'react-instantsearch-hooks-server'
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web'

import Layout from '@/components/Layout'
import ProductsComponent from '@/components/Products'
import { routing } from '@/lib/betterUrl'
import { INDEX_NAME, searchClient } from '@/lib/clients/searchClient'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

export default function Products({ serverState }: any) {
  return (
    <InstantSearchSSRProviderWrapper serverState={serverState}>
      <Layout
        withInstantSearch
        crumb={[{ title: 'Accueil', route: '/' }, { title: 'Arts de table' }]}
      >
        <Head>
          <title>Terre Rouge - Arts de table</title>
        </Head>
        <Configure
          filters="collections: arts-de-table"
          hitsPerPage={50}
          analyticsTags={['browse', 'arts-de-table']}
        />
        <ProductsComponent title="arts de tables" />
      </Layout>
    </InstantSearchSSRProviderWrapper>
  )
}

function InstantSearchSSRProviderWrapper({ serverState, children }: any) {
  const [ssr, setSsr] = useState(true)
  useEffect(() => setSsr(false), [])
  return ssr ? (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME} routing={false}>
        {children}
      </InstantSearch>
    </InstantSearchSSRProvider>
  ) : (
    <InstantSearch
      searchClient={searchClient}
      indexName={INDEX_NAME}
      routing={routing('arts-de-table')}
    >
      {children}
    </InstantSearch>
  )
}

function ProductsBodySSR() {
  return (
    <InstantSearchSSRProvider>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME} routing={false}>
        <Configure
          filters="collections: arts-de-table"
          hitsPerPage={50}
          analyticsTags={['browse', 'arts-de-table']}
        />
        <ProductsComponent title="arts de tables" />
      </InstantSearch>
    </InstantSearchSSRProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)
  const serverState = await getServerState(<ProductsBodySSR />, { renderToString })
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      serverState,
    },
  }
}
