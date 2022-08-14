export interface IReview {
  title: string
  author: string
  body: string
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}

export type IReviews = Array<IReview>
