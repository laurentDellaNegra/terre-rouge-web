import { QueryClient, dehydrate } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'

import Incentives from '@/components/Incentives'
import Layout from '@/components/Layout'
import LogoClouds from '@/components/LogoClouds'
import Story from '@/components/Story'
import Testimonial from '@/components/Testimonial'
import Hero from '@/components/UI/Hero'
import HorizontalProducts from '@/components/UI/horizontalProducts'
import { GET_HOME_PAGE_PRODUCTS_QUERY_KEY, getOurSelection } from '@/lib/getOurSelection'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terre Rouge - Epicerie de Madagascar</title>
      </Head>
      <Hero />
      <HorizontalProducts />
      <Story />
      <LogoClouds />
      <Testimonial />
      <Incentives />
    </Layout>
  )
}
export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery([GET_HOME_PAGE_PRODUCTS_QUERY_KEY], getOurSelection)
  await queryClient.prefetchQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Home
