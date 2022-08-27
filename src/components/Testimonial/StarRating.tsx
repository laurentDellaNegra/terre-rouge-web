import Image from 'next/future/image'

import srcStar15 from '@/public/logos/trustpilot/rating-1.5.svg'
import srcStar1 from '@/public/logos/trustpilot/rating-1.svg'
import srcStar25 from '@/public/logos/trustpilot/rating-2.5.svg'
import srcStar2 from '@/public/logos/trustpilot/rating-2.svg'
import srcStar35 from '@/public/logos/trustpilot/rating-3.5.svg'
import srcStar3 from '@/public/logos/trustpilot/rating-3.svg'
import srcStar45 from '@/public/logos/trustpilot/rating-4.5.svg'
import srcStar4 from '@/public/logos/trustpilot/rating-4.svg'
import srcStar5 from '@/public/logos/trustpilot/rating-5.svg'
import { IReview } from '@/types/Reviews'

const RATINGS = new Map<number, any>([
  [1, srcStar1],
  [1.5, srcStar15],
  [2, srcStar2],
  [2.5, srcStar25],
  [3, srcStar3],
  [3.5, srcStar35],
  [4, srcStar4],
  [4.5, srcStar45],
  [5, srcStar5],
])

interface Props {
  rating: IReview['rating']
}

export function StarRating({ rating }: Props) {
  const src = RATINGS.get(rating)
  return src ? <Image priority className="h-5 w-auto" src={src} alt={`${rating} stars`} /> : null
}
