import type { NextPage } from 'next'
import Head from 'next/head'
import { getShopPageForHome } from '../lib/api'

const Home: NextPage = ({ shop, products }: any) => {
  console.log('shop', shop)
  console.log('products', products)
  return (
    <div>
      <Head>
        <title>{shop.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-blue-500 underline">Hello {shop.name} !</h1>
      </main>

      <footer>Footer</footer>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getShopPageForHome()
  return { props: { ...data } }
}

export default Home
