import { IReview, IReviews } from '@/types/Reviews'

import { shuffleArray } from './array'

const URL_TRUSTPILOT = 'https://fr.trustpilot.com/review/terre-rouge.shop'

export async function getTrustpilotReviews() {
  try {
    const response = await fetch(URL_TRUSTPILOT)
    const content = await response.text()
    return {
      nbReviews: getNbReviews(content),
      rating: getRating(content),
      reviews: getReviews(content),
    }
  } catch (error) {
    //TODO: use Sentry
    console.error(error)
    if (error instanceof Error) {
      // return { error: error.message }
    } else {
      // return { error: String(error) }
    }
    return { reviewsNb: 34, rating: 4.9 }
  }
}

function getNbReviews(content: string) {
  const regexNbReviews = /data-reviews-count-typography=\"true\">([0-9]*)<\/span>/g
  const nbReviews = regexNbReviews.exec(content)
  if (!nbReviews) throw new Error('Could not get number of reviews on trustpilot')
  return nbReviews[1]
}

function getRating(content: string) {
  const regexRating = /data-rating-typography=\"true\">([0-9]*,[0-9]*)<\/p>/g
  const rating = regexRating.exec(content)
  if (!rating) throw new Error('Could not get rating on trustpilot')
  return rating[1]
}

function getReviews(content: string): IReviews {
  // get name
  const regexAuthors = /data-consumer-name-typography=\"true\">(.*?)<\/div>/g
  //get comment
  const regexBodies = /data-service-review-text-typography=\"true\">(.*?)<\/p>/g
  //get title
  const regexTitles = /data-review-title-typography=\"true\">(.*?)<\/a>/g
  //get rating
  const regexRatings = /data-service-review-rating=\"(\d)\"/g
  let authors = regexAuthors.exec(content)
  let bodies = regexBodies.exec(content)
  let titles = regexTitles.exec(content)
  let ratings = regexRatings.exec(content)

  const MAX_REVIEWS = 100
  let counter = 1
  const reviews: IReviews = []
  while (
    authors != null &&
    bodies != null &&
    titles != null &&
    ratings != null &&
    counter <= MAX_REVIEWS
  ) {
    reviews.push({
      author: authors[1],
      body: bodies[1],
      rating: Number(ratings[1]) as IReview['rating'],
      title: titles[1],
    })
    authors = regexAuthors.exec(content)
    bodies = regexBodies.exec(content)
    titles = regexTitles.exec(content)
    ratings = regexRatings.exec(content)
    counter += 1
  }
  if (reviews.length === 0) throw new Error('Could not get reviews on trustpilot')
  // We shuffle the result
  return shuffleArray(reviews)
}
