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
    <>
      <Head>
        <title>Terre Rouge - Épices</title>
        <meta name="description" content="Notre sélection d'épices" />
      </Head>
      <InstantSearchSSRProviderWrapper serverState={serverState}>
        <Layout crumb={[{ title: 'Accueil', route: '/' }, { title: 'Épices' }]}>
          <Configure
            filters="collections: epices"
            hitsPerPage={50}
            analyticsTags={['browse', 'epices']}
          />
          <ProductsComponent title="épices" />
        </Layout>
      </InstantSearchSSRProviderWrapper>
    </>
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
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME} routing={routing('epices')}>
      {children}
    </InstantSearch>
  )
}

function ProductsBodySSR() {
  return (
    <InstantSearchSSRProvider>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME} routing={false}>
        <Configure
          filters="collections: epices"
          hitsPerPage={50}
          analyticsTags={['browse', 'epices']}
        />
        <ProductsComponent title="épices" />
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
