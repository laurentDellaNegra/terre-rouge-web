import recommend from '@algolia/recommend'
import { RelatedProducts as RelatedProductsAlgolia } from '@algolia/recommend-react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import TextLink from '@/atomic/atoms/TextLink'
import TitleSection from '@/atomic/atoms/TitleSection'
import { GET_HOME_PAGE_PRODUCTS_QUERY_KEY, getOurSelection } from '@/lib/getOurSelection'
import { price } from '@/lib/price'
import { ProductRecord } from '@/types/ProductRecord'
import { CurrencyCode } from '@/types/gql/graphql'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
const INDEX_NAME = 'prod_SHOPIFY'
const recommendClient = recommend(APP_ID, API_KEY)

export default function RelatedProducts({ productId }: { productId: string }) {
  const { data } = useQuery([GET_HOME_PAGE_PRODUCTS_QUERY_KEY], getOurSelection)
  const products = data?.collection?.products
  if (!products) return null
  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-24 lg:max-w-none">
      <div className="py-8 sm:py-16 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <TitleSection>Plus de produits à découvrir</TitleSection>
          <TextLink href="/produits" className="hidden sm:block text-sm">
            Voir tout
          </TextLink>
        </div>

        <RelatedProductsAlgolia
          recommendClient={recommendClient}
          indexName={INDEX_NAME}
          objectIDs={[productId]}
          itemComponent={RelatedItem}
          maxRecommendations={4}
          view={ListView}
          translations={{ title: '' }}
        />

        <div className="mt-12 flex px-4 sm:hidden">
          <TextLink href="/produits" className="text-sm">
            Voir tout
          </TextLink>
        </div>
      </div>
    </div>
  )
}

function ListView(props: any) {
  return (
    <div className="relative mt-8">
      <div className="relative -mb-6 w-full overflow-x-auto pb-6">
        <ul
          role="list"
          className="inline-flex space-x-8 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
        >
          {props.items.map((item: any) => (
            <li key={item.objectID} className="inline-flex w-64 flex-col text-center lg:w-auto">
              <props.itemComponent item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function RelatedItem({ item: product }: { item: ProductRecord }) {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover object-center group-hover:opacity-75"
          width={240}
          height={240}
          quality={60}
        />
      </div>
      <div className="mt-6">
        <h3 className="mt-1 font-semibold text-gray-900">
          <Link href={`/produit/${product.handle}`}>
            <span className="absolute inset-0" />
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 text-gray-900">
          {price(product.price, product.currency as CurrencyCode)}
        </p>
      </div>
    </div>
  )
}
