export interface IReview {
  title: string
  author: string
  body: string
  rating: number
}

export type IReviews = Array<IReview>
