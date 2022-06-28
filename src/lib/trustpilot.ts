export default async function getTrustpilotReviews() {
  try {
    const response = await fetch(
      'https://fr.trustpilot.com/review/terre-rouge.shop?utm_medium=trustbox&utm_source=MicroReviewCount'
    )

    const content = await response.text()
    const regexNbReviews = /data-reviews-count-typography=\"true\">([0-9]*)<\/span>/g
    const regexRating = /data-rating-typography=\"true\">([0-9]*,[0-9]*)<\/p>/g
    const nbReviews = regexNbReviews.exec(content)
    const rating = regexRating.exec(content)
    if (!nbReviews || !rating) throw new Error('Could not parse content')
    return { nbReviews: nbReviews[1], rating: rating[1] }
  } catch (error) {
    // use Sentry
    console.error(error)
    if (error instanceof Error) {
      // return { error: error.message }
    } else {
      // return { error: String(error) }
    }
    return { reviewsNb: 34, rating: 4.9 }
  }
}
