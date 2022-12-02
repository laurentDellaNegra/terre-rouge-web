import { graphql } from '@/types/gql'

export const GetShopPageForHome = graphql(`
  query GetShopPageForHome($maxWidth: Int = 384, $maxHeight: Int = 384) {
    shop {
      name
      privacyPolicy {
        title
        handle
      }
      refundPolicy {
        title
        handle
      }
      termsOfService {
        title
        handle
      }
    }
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
