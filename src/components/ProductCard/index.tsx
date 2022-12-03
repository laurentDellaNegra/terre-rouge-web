import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

import { price } from '@/lib/price'
import { ProductRecord } from '@/types/ProductRecord'
import { CurrencyCode } from '@/types/gql/graphql'

interface Props {
  product: ProductRecord
  position: number
}

export default function ProductCard(props: Props) {
  const {
    product: { href, image, title, price: amount, currency, handle },
    position,
  } = props
  return (
    <Link href={`/produit/${handle}`} className="group text-sm">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        {image ? (
          <Image
            src={image}
            alt={title}
            priority={position < 3}
            className="object-cover object-center"
            fill
            sizes="100vw"
          />
        ) : (
          <div className="p-24">
            <PhotoIcon className="text-gray-200" />
          </div>
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {price(amount, currency as CurrencyCode)}
      </p>
    </Link>
  )
}
