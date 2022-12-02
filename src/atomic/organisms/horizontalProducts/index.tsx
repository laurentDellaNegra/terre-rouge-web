import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import TextLink from '@/atomic/atoms/TextLink'
import TitleSection from '@/atomic/atoms/TitleSection'
import getShopPageForHome from '@/lib/getShopPageForHome'
import { price } from '@/lib/price'
import { CurrencyCode } from '@/types/gql/graphql'

export default function HorizontalProducts() {
  const { data } = useQuery(['shopHome'], getShopPageForHome)
  console.log('shopHome', data?.collection?.products)
  const products = data?.collection?.products
  if (!products) return null
  return (
    <div className="bg-gray-100">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <TitleSection>Notre sélection</TitleSection>
          <TextLink href="/products" className="hidden sm:block text-sm">
            Voir tout
          </TextLink>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.edges.map((product) => (
                <li
                  key={product.node.handle}
                  className="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <Image
                        src={product.node.images.edges[0].node.originalSrc}
                        alt={product.node.images.edges[0].node.altText || product.node.title}
                        className="object-cover object-center group-hover:opacity-75"
                        fill
                        sizes="100vw"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <Link href={`/product/${product.node.handle}`}>
                          <span className="absolute inset-0" />
                          {product.node.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-gray-900">
                        {price(
                          product.node.priceRange.minVariantPrice.amount,
                          product.node.priceRange.minVariantPrice.currencyCode as CurrencyCode
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <TextLink href="/products" className="text-sm">
            Voir tout
          </TextLink>
        </div>
      </div>
    </div>
  )
}
