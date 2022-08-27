import clsx from 'clsx'
import { useMemo } from 'react'

import { IReview } from '@/types/Reviews'

import { StarRating } from './StarRating'

interface Props {
  className: string
  review: IReview
}

export default function Review(props: Props) {
  const {
    review: { title, body, author, rating },
    className,
  } = props
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p
          className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mt-3 text-base leading-7" dangerouslySetInnerHTML={{ __html: body }} />
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">{author}</figcaption>
    </figure>
  )
}
