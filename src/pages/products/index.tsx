import algoliasearch from 'algoliasearch/lite'
import { IncomingMessage } from 'http'
import { history } from 'instantsearch.js/es/lib/routers/index.js'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getServerState } from 'react-instantsearch-hooks-server'
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  InstantSearchSSRProvider,
  Pagination,
  RefinementList,
  SearchBox,
  SortBy,
} from 'react-instantsearch-hooks-web'

import ProductsComponent from '@/components/Products'
import { getShopPageForHome } from '@/lib/api'
import { getTrustpilotReviews } from '@/lib/trustpilot'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''
const INDEX_NAME_PRICE_ASC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_ASC || ''
const INDEX_NAME_PRICE_DESC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_DESC || ''

const searchClient = algoliasearch(APP_ID, API_KEY)

// TODO: Use useHits to create custom components and have more control
function Hit({ hit }: any) {
  return (
    <article>
      <div className="h-72 w-72 relative">
        <Image
          src={hit.image}
          alt={hit.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="50vw"
          priority // TODO: set priority only on firsts images
        />
      </div>
      <p>{hit.category}</p>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>${hit.price}</p>
    </article>
  )
}

export default function Products({ serverState, url }: any) {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch
          searchClient={searchClient}
          indexName={INDEX_NAME}
          routing={{
            router: history({
              getLocation: () =>
                typeof window === 'undefined'
                  ? (new URL(url!) as unknown as Location)
                  : window.location,
            }),
          }}
        >
          {/* <SearchBox />
          <SortBy
            items={[
              { label: 'Featured', value: INDEX_NAME },
              { label: 'Price (asc)', value: INDEX_NAME_PRICE_ASC },
              { label: 'Price (desc)', value: INDEX_NAME_PRICE_DESC },
            ]}
          />
          <Configure hitsPerPage={5} />
          <RefinementList attribute="category" />
          <Hits hitComponent={Hit} />
          <Pagination /> */}
          <ProductsComponent />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const protocol = req.headers.referer?.split('://')[0] || 'https'
  const url = `${protocol}://${req.headers.host}${req.url}`
  const serverState = await getServerState(<Products url={url} />)

  return {
    props: {
      serverState,
      url,
    },
  }
}

// export async function getStaticProps() {
//   const data = await getShopPageForHome()
//   const reviews = await getTrustpilotReviews()
//   return { props: { ...data, reviews } }
// }