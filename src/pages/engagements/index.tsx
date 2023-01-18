import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import EngagementsComponent from '@/components/Engagements'
import Layout from '@/components/Layout'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

export default function Engagements() {
  return (
    <Layout>
      <Head>
        <title>Nos engagements</title>
      </Head>
      <EngagementsComponent />
    </Layout>
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
