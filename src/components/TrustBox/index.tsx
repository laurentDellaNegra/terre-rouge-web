import { useQuery } from '@tanstack/react-query'
import Image from 'next/future/image'

import Banner from '@/atomic/atoms/Banner'
import { getTrustpilotReviews } from '@/lib/trustpilot'
import trustpilotImg from '@/public/logos/trustpilot/logo.svg'
import ratingImg from '@/public/logos/trustpilot/rating-4.5.svg'

interface Props {
  className?: string
}
export default function TrustBox(props: Props) {
  const { className = '' } = props
  const {
    data: { nbReviews, rating },
  }: any = useQuery(['reviews'], getTrustpilotReviews)
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
        <Image className="h-5 w-auto" src={trustpilotImg} alt="Trustpilot logo" />
        <p>Trustpilot</p>
      </div>
    </Banner>
  )
}
