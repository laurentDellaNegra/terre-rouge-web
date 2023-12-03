export interface ProductRecord {
  availableForSale: boolean
  category: string
  compareAtPrice: number
  currency: string
  description: string
  handle: string
  href: string
  image: string
  objectID: string
  price: number
  tags: Array<string>
  title: string
  variants: Array<{ name: string; value: string }>
}
export type ProductRecords = Array<ProductRecord>
