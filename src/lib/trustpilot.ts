import { truncateString } from './string'

const URL_TRUSTPILOT = 'https://fr.trustpilot.com/review/terre-rouge.shop'

export async function getTrustpilotReviews() {
  try {
    const response = await fetch(URL_TRUSTPILOT)
    const content = await response.text()
    getFirst3Reviews(content)
    return {
      nbReviews: getNbReviews(content),
      rating: getRating(content),
      reviews: getFirst3Reviews(content),
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

function getFirst3Reviews(content: string) {
  // get name
  const regexNames = /data-consumer-name-typography=\"true\">(.*?)<\/div>/g
  //get comment
  const regexComments = /data-service-review-text-typography=\"true\">(.*?)<\/p>/g
  let names = regexNames.exec(content)
  let comments = regexComments.exec(content)

  const MAX_REVIEWS = 3
  let counter = 1
  const reviews: Array<{ name: string; comment: string }> = []
  while (names != null && comments != null && counter <= MAX_REVIEWS) {
    reviews.push({ name: names[1], comment: truncateString(comments[1], 180) })
    names = regexNames.exec(content)
    comments = regexComments.exec(content)
    if (!names || !comments) throw new Error('Could not get reviews on trustpilot')
    counter += 1
  }
  console.log('getFirst3Reviews', reviews)
  return reviews
}
