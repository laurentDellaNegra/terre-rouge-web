import { graphql } from '@/types/gql'

export const GetProduct = graphql(`
  query GetProduct($handle: String!, $maxWidth: Int = 600, $maxHeight: Int = 600) {
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
      variants(first: 1) {
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
      application: metafield(namespace: "custom", key: "application") {
        key
        value
      }
      benefits: metafield(namespace: "custom", key: "benefits") {
        key
        value
      }
      composition: metafield(namespace: "custom", key: "composition") {
        key
        value
      }
    }
  }
`)
