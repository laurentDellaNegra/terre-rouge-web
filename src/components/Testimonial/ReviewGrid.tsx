import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { IReviews } from '@/types/Reviews'

import ReviewColumn from './ReviewColumn'

function splitArray(array: IReviews, numParts: number) {
  const result: any = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

interface Props {
  reviews: IReviews
}

export default function ReviewGrid(props: Props) {
  const { reviews } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2) as any]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex: number) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length ? 'md:hidden' : '',
                reviewIndex >= columns[0].length ? 'lg:hidden' : ''
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) => (reviewIndex >= columns[1].length ? 'lg:hidden' : '')}
            msPerPixel={15}
          />
          <ReviewColumn reviews={columns[2].flat()} className="hidden lg:block" msPerPixel={10} />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}
