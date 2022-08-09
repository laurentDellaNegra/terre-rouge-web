import type { NextPage } from 'next'
import { QueryClient, dehydrate } from 'react-query'
import { useGetShopPageForHomeQuery } from 'types/Shopify'

import Hero from '@/atomic/organisms/Hero'
import HorizontalProducts from '@/atomic/organisms/horizontalProducts'
import Incentives from '@/components/Incentives'
import Layout from '@/components/Layout'
import Story from '@/components/Story'
import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'
import { getTrustpilotReviews } from '@/lib/trustpilot'

const Home: NextPage = () => {
  const { status, data, error, isFetching } = useGetShopPageForHomeQuery(graphQLRequestClient)
  console.log('shop', data)
  console.log('status', status)
  console.log('error', error)
  console.log('isFetching', isFetching)
  return (
    <Layout>
      <Hero />
      <HorizontalProducts />
      <Story />
      <Incentives />
    </Layout>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    useGetShopPageForHomeQuery.getKey(),
    useGetShopPageForHomeQuery.fetcher(graphQLRequestClient)
  )
  await queryClient.prefetchQuery('reviews', getTrustpilotReviews)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
