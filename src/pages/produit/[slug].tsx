import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { InstantSearch } from 'react-instantsearch-hooks-web'

import Layout from '@/components/Layout'
import ProductComponent from '@/components/Product'
import { INDEX_NAME, searchClient } from '@/lib/clients/searchClient'
import getAllProductsWithSlug from '@/lib/getAllProductsWithSlug'
import getShopPageForProduct, { GET_PRODUCT_QUERY_KEY } from '@/lib/getProduct'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

export default function Product() {
  const router = useRouter()
  const { slug } = router.query
  const { data: product } = useQuery(['shopProduct', slug], getShopPageForProduct)
  return (
    <>
      <Head>
        <title>Product detail</title>
      </Head>

      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Layout
          crumb={[
            { title: 'Accueil', route: '/' },
            { title: 'Produits', route: '/produits' },
            { title: product?.productByHandle?.title },
          ]}
        >
          {product && <ProductComponent product={product} />}
        </Layout>
      </InstantSearch>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery(
    [GET_PRODUCT_QUERY_KEY, context.params?.slug],
    getShopPageForProduct
  )
  await queryClient.prefetchQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export async function getStaticPaths() {
  const allProducts = await getAllProductsWithSlug()
  // console.log('allProducts', allProducts)
  return {
    paths: allProducts.products.edges.map(({ node }: any) => `/produit/${node.handle}`),
    fallback: false,
  }
}
