import Banner from '@/atomic/atoms/Banner'
import ratingImg from '@/public/logos/trustpilot-rating.svg'
import trustPilotlogo from '@/public/logos/trustpilot.svg'

interface Props {
  nbReviews: number
  rating: number
}
export default function TrustBox(props: Props) {
  const { nbReviews, rating } = props
  return (
    <Banner
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
