import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { IReviews } from '@/types/Reviews'

import Review from './Review'

interface Props {
  reviews: IReviews
  className?: string
  msPerPixel: number
  reviewClassName?: (index: number) => string
}

export default function ReviewColumn(props: Props) {
  const { className = '', reviews, reviewClassName = () => '', msPerPixel = 0 } = props
  const columnRef = useRef<HTMLDivElement>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    // if (!columnRef || !columnRef.current) return

    const resizeObserver = new window.ResizeObserver(() => {
      // if (!columnRef || !columnRef.current) return
      if (columnRef.current) setColumnHeight(columnRef.current.offsetHeight)
    })

    if (columnRef.current) resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as any}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          review={review}
        />
      ))}
    </div>
  )
}
