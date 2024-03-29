import { graphql } from '@/types/gql'

export const ProductFields = graphql(`
  fragment ProductFields on Product {
    id
    handle
    title
    productType
    tags
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 100) {
      edges {
        node {
          altText
          originalSrc
          transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)
        }
      }
    }
  }
`)
