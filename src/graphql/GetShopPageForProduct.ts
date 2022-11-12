import { graphql } from '@/types/gql'

export const GetShopPageForProduct = graphql(`
  query GetShopPageForProduct($handle: String!, $maxWidth: Int = 600, $maxHeight: Int = 600) {
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
    productByHandle(handle: $handle) {
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
      descriptionHtml
      variants(first: 100) {
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
              transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)
            }
          }
        }
      }
    }
  }
`)
