import { graphql } from '@/types/gql'

export const GetOurSelection = graphql(`
  query GetOurSelection($maxWidth: Int = 240, $maxHeight: Int = 240) {
    collection(handle: "frontpage") {
      products(first: 4) {
        edges {
          node {
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
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  weight
                  weightUnit
                  priceV2 {
                    amount
                    currencyCode
                  }
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    altText
                    originalSrc
                    transformedSrc(
                      maxHeight: $maxHeight
                      maxWidth: $maxWidth
                      crop: CENTER
                      scale: 3
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`)
