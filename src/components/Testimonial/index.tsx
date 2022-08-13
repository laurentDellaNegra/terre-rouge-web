import { useQuery } from 'react-query'

import TextLink from '@/atomic/atoms/TextLink'
import TitleSection from '@/atomic/atoms/TitleSection'
import { getTrustpilotReviews } from '@/lib/trustpilot'

export default function Testimonial() {
  const {
    data: { reviews },
  }: any = useQuery('reviews', getTrustpilotReviews)

  return (
    <div className="bg-slate-100">
      <section
        aria-labelledby="testimonial-heading"
        className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <TitleSection id="testimonial-heading">
            Nos derniers avis sur{' '}
            <TextLink
              href="https://fr.trustpilot.com/review/terre-rouge.shop"
              className="text-2xl"
              hideArrow
            >
              Trustpilot
            </TextLink>
          </TitleSection>

          <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {reviews.map((review: any) => (
              <blockquote key={review.name} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="lg:min-h-[112px] text-lg text-gray-600 text-ellipsis overflow-hidden">
                    {review.comment}
                  </p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">
                    {review.name}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
