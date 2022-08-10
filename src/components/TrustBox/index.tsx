import Image from 'next/future/image'
import { useQuery } from 'react-query'

import Banner from '@/atomic/atoms/Banner'
import { getTrustpilotReviews } from '@/lib/trustpilot'
import ratingImg from '@/public/logos/trustpilot-rating.svg'
import trustPilotlogo from '@/public/logos/trustpilot.svg'

interface Props {
  className?: string
}
export default function TrustBox(props: Props) {
  const { className = '' } = props
  const {
    data: { nbReviews, rating },
  }: any = useQuery('reviews', getTrustpilotReviews)
  return (
    <Banner
      className={className}
      onClick={() =>
        (location.href =
          'https://fr.trustpilot.com/review/terre-rouge.shop?utm_medium=trustbox&utm_source=MicroReviewCount')
      }
    >
      <div className="flex content-center justify-center gap-1 text-sm">
        <p>
          <span className="font-semibold">Excellent</span>
        </p>

        <Image className="h-5 w-auto" src={ratingImg} alt="4.5 stars" />
        <p className="hidden sm:inline">
          <span className="hidden lg:inline">
            <span className="font-semibold">{rating}</span> sur 5 basé sur{' '}
          </span>
          <span className="font-semibold">{nbReviews} avis</span> sur
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={20} height={20} src="logos/trustpilot.svg" alt="Trustpilot logo" />
        <p>Trustpilot</p>
      </div>
    </Banner>
  )
}
