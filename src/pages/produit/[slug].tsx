import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { InstantSearch } from 'react-instantsearch-hooks-web'

import Layout from '@/components/Layout'
import ProductComponent from '@/components/Product'
import { INDEX_NAME, searchClient } from '@/lib/clients/searchClient'
import getAllProductsWithSlug from '@/lib/getAllProductsWithSlug'
import { GET_PRODUCT_QUERY_KEY, getProduct } from '@/lib/getProduct'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

export default function Product() {
  const router = useRouter()
  const { slug } = router.query
  const { data } = useQuery([GET_PRODUCT_QUERY_KEY, slug], getProduct)
  if (!data) return null
  const { product } = data
  if (!product) return null
  return (
    <Layout
      crumb={[
        { title: 'Accueil', route: '/' },
        { title: 'Produits', route: '/produits' },
        { title: product.title },
      ]}
    >
      <Head>
        <title>{product?.title ? `Terre Rouge - ${product.title}` : ''}</title>
        {product?.images.edges[0].node.smallUrl && (
          <meta property="og:image" content={product?.images.edges[0].node.smallUrl} />
        )}
      </Head>
      {product && <ProductComponent productQuery={data} />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery([GET_PRODUCT_QUERY_KEY, context.params?.slug], getProduct)
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
