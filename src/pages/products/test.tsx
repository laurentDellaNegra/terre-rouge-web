import Head from 'next/head'
import { QueryClient, dehydrate } from 'react-query'

import Layout from '@/components/Layout'
import { getTrustpilotReviews } from '@/lib/trustpilot'

export default function Product() {
  return (
    <>
      <Head>
        <title>Product detail</title>
      </Head>
      <Layout>
        <div className="h-screen flex items-center justify-center bg-red-300">Product</div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['reviews'], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
