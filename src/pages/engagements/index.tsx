import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { InstantSearch } from 'react-instantsearch-hooks-web'

import EngagementsComponent from '@/components/Engagements'
import Layout from '@/components/Layout'
import { INDEX_NAME, searchClient } from '@/lib/clients/searchClient'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

export default function Engagements() {
  return (
    <>
      <Head>
        <title>Nos engagements</title>
      </Head>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Layout withInstantSearch>
          <EngagementsComponent />
        </Layout>
      </InstantSearch>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
