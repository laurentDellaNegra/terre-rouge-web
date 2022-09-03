export interface IProductHit {
  category: string
  currency: string
  description: string
  handle: string
  image: string
  objectID: string
  price: number
  tags: Array<string>
  title: string
  href: string
}
export type IProductHits = Array<IProductHit>
