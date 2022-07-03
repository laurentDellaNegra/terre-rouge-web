import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@/atomic/organisms/Hero'
import HorizontalProducts from '@/atomic/organisms/horizontalProducts'
import HeaderMenu from '@/components/HeaderMenu'
import Layout from '@/components/Layout'
import TrustBox from '@/components/TrustBox'
import { getShopPageForHome } from '@/lib/api'
import { getTrustpilotReviews } from '@/lib/trustpilot'

const Home: NextPage = ({ shop, products, reviews }: any) => {
  console.log('shop', shop)
  console.log('products', products)
  console.log('reviews', reviews)
  return (
    <Layout reviews={reviews}>
      <Hero />
      <HorizontalProducts />
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getShopPageForHome()
  const reviews = await getTrustpilotReviews()
  return { props: { ...data, reviews } }
}

export default Home
