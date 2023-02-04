import { useQuery } from '@tanstack/react-query'

import P from '@/components/UI/P'
import TextLink from '@/components/UI/TextLink'
import TitleSection from '@/components/UI/TitleSection'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

import ReviewGrid from './ReviewGrid'

export default function Reviews() {
  const {
    data: { reviews },
  }: any = useQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)

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
            <TextLink href="https://fr.trustpilot.com/review/terre-rouge.shop" hideArrow>
              Trustpilot
            </TextLink>
          </P>
          <ReviewGrid reviews={reviews} />
        </div>
      </section>
    </div>
  )
}
