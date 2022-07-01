import clsx from 'clsx'

import Banner from '@/atomic/atoms/Banner'
import { ScrollDirecton } from '@/hooks/useScrollDirection'
import ratingImg from '@/public/logos/trustpilot-rating.svg'
import trustPilotlogo from '@/public/logos/trustpilot.svg'

interface Props {
  nbReviews: number
  rating: number
  scrollDirection: ScrollDirecton
}
export default function TrustBox(props: Props) {
  const { nbReviews, rating, scrollDirection } = props
  const isScrolled = scrollDirection !== null
  return (
    <Banner
      className={clsx('sticky z-40 transition-all duration-500', {
        'top-0': scrollDirection === 'up',
        '-top-[29.12px] sm:-top-[37.12px]': scrollDirection === 'down',
        'bg-primary-extra-light/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-primary-extra-light/75':
          isScrolled,
        'bg-primary-extra-light': !isScrolled,
      })}
      onClick={() =>
        (location.href =
          'https://fr.trustpilot.com/review/terre-rouge.shop?utm_medium=trustbox&utm_source=MicroReviewCount')
      }
    >
      <div className="flex justify-center text-sm content-center gap-1">
        <p>
          <span className="font-semibold">Excellent</span>
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={100} height={20} src="logos/trustpilot-rating.svg" alt="4.5 stars" />
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
