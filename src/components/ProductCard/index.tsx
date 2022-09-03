import Image from 'next/image'

import { CURRENCIES } from '@/types/Currencies'
import { IProductHit } from '@/types/IProductHits'

interface Props {
  product: IProductHit
  position: number
}

export default function ProductCard(props: Props) {
  const {
    product: { href, image, title, price, currency },
    position,
  } = props
  return (
    <a href={href} className="group text-sm">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={position < 3}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {price}
        {CURRENCIES.get(currency)?.symbol}
      </p>
    </a>
  )
}
