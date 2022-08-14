import { useQuery } from 'react-query'

import P from '@/atomic/atoms/P'
import TextLink from '@/atomic/atoms/TextLink'
import TitleSection from '@/atomic/atoms/TitleSection'
import { getTrustpilotReviews } from '@/lib/trustpilot'

import ReviewGrid from './ReviewGrid'

export default function Reviews() {
  const {
    data: { reviews },
  }: any = useQuery('reviews', getTrustpilotReviews)

  return (
    <div className="bg-gray-50">
      <section
        id="reviews"
        aria-labelledby="reviews-title"
        className="pt-20 pb-16 sm:pt-32 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TitleSection id="reviews-title" center>
            Nos avis certifiés
          </TitleSection>
          <P className="mt-5 md:mt-8 text-center">
            Tous nos avis clients sont certifiés par la plateforme{' '}
            <TextLink href="https://fr.trustpilot.com/review/terre-rouge.shop">Trustpilot</TextLink>
          </P>
          <ReviewGrid reviews={reviews} />
        </div>
      </section>
    </div>
  )
}
