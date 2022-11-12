import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import ProductComponent from '@/components/Product'
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
        <title>Product detail</title>
      </Head>
      <Layout
        crumb={[
          { title: 'Accueil', route: '/' },
          { title: 'Produits', route: '/products' },
          { title: product?.productByHandle?.title },
        ]}
      >
        {product && <ProductComponent product={product} />}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['shopProduct', context.params?.slug], getShopPageForProduct)
  await queryClient.prefetchQuery(['reviews'], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export async function getStaticPaths() {
  const allProducts = await getAllProductsWithSlug()
  console.log('allProducts', allProducts)
  return {
    paths: allProducts.products.edges.map(({ node }: any) => `/products/${node.handle}`),
    fallback: false,
  }
}
