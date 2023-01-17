import { PhotoIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { price } from '@/lib/price'
import { ProductRecord } from '@/types/ProductRecord'
import { CurrencyCode } from '@/types/gql/graphql'

import { PRODUCT_COLORS } from '../Product/colors'

interface Props {
  product: ProductRecord
  position: number
}

export default function ProductCard(props: Props) {
  const {
    product: { href, image, title, price: amount, currency, handle, variants },
    position,
  } = props
  const hasVariants = variants.length > 0
  const variantColorType = hasVariants && variants[0].name === 'Couleur'

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
      <div className="flex justify-between">
        <div>
          <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {price(amount, currency as CurrencyCode)}
          </p>
        </div>
        {hasVariants && (
          <div>
            <h4 className="sr-only">Available colors</h4>
            {variantColorType ? (
              <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-4">
                {variants.map((v, i) => (
                  <li
                    key={i}
                    className={clsx(
                      PRODUCT_COLORS[v.value].class,
                      'h-4 w-4 rounded-full border border-black border-opacity-10'
                    )}
                  >
                    <span className="sr-only">{v.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="flex text-sm text-gray-500 font-semibold pt-4">
                {variants.map((v, i) => (
                  <span key={i}>
                    {i !== 0 ? (
                      <span aria-hidden="true" className="mx-1">
                        &middot;
                      </span>
                    ) : null}
                    <span>{v.value}</span>
                  </span>
                ))}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
