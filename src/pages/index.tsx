import type { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import Hero from '@/atomic/organisms/Hero'
import HorizontalProducts from '@/atomic/organisms/horizontalProducts'
import HeaderMenu from '@/components/HeaderMenu'
import Layout from '@/components/Layout'
import TrustBox from '@/components/TrustBox'
import { getShopPageForHome } from '@/lib/api'
import { getTrustpilotReviews } from '@/lib/trustpilot'

const Home: NextPage = () => {
  // const Home: NextPage = () => {
  const data: any = useQuery('shopPageForHome', getShopPageForHome)
  console.log('shop', data)
  return (
    <Layout>
      <Hero />
      <HorizontalProducts />
    </Layout>
  )
}

export async function getStaticProps() {
  // const data = await getShopPageForHome()
  // const reviews = await getTrustpilotReviews()
  // return { props: { ...data, reviews } }
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('shopPageForHome', getShopPageForHome)
  await queryClient.prefetchQuery('reviews', getTrustpilotReviews)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
