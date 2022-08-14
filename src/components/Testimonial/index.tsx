import { useQuery } from 'react-query'

import TextLink from '@/atomic/atoms/TextLink'
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
          <h2
            id="reviews-title"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
          >
            Nos avis certifiés
          </h2>
          <p className="mt-2 text-lg text-gray-600 sm:text-center">
            Tous les avis de nos clients sont certifiés sur la plateforme{' '}
            <TextLink href="https://fr.trustpilot.com/review/terre-rouge.shop">Trustpilot</TextLink>
          </p>
          <ReviewGrid reviews={reviews} />
        </div>
      </section>
    </div>
  )
}
