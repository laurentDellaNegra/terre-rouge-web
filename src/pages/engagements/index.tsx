import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { InstantSearch } from 'react-instantsearch-hooks-web'

import Engagements from '@/components/Engagements'
import Layout from '@/components/Layout'
import ProductComponent from '@/components/Product'
import { INDEX_NAME, searchClient } from '@/lib/clients/searchClient'
import getAllProductsWithSlug from '@/lib/getAllProductsWithSlug'
import getShopPageForProduct from '@/lib/getShopPageForProduct'
import { getTrustpilotReviews } from '@/lib/trustpilot'

export default function Product() {
  const router = useRouter()
  const { slug } = router.query
  const { data: product } = useQuery(['shopProduct', slug], getShopPageForProduct)
  return (
    <>
      <Head>
        <title>Nos engagements</title>
      </Head>

      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Layout>
          <Engagements />
        </Layout>
      </InstantSearch>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['reviews'], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
