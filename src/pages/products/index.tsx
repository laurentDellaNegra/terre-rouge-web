import algoliasearch from 'algoliasearch/lite'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-hooks-web'

import { getShopPageForHome } from '@/lib/api'
import { getTrustpilotReviews } from '@/lib/trustpilot'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''

const searchClient = algoliasearch(APP_ID, API_KEY)

function Hit({ hit }: any) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.category}</p>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>${hit.price}</p>
    </article>
  )
}

const Home: NextPage = ({ shop, products, reviews }: any) => {
  return (
    <>
      <Head>
        <title>{shop.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Configure hitsPerPage={40} />
        <SearchBox />
        <RefinementList attribute="category" />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </>
  )
}

export async function getStaticProps() {
  const data = await getShopPageForHome()
  const reviews = await getTrustpilotReviews()
  return { props: { ...data, reviews } }
}

export default Home
