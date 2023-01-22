import { graphql } from '@/types/gql'

export const GetProduct = graphql(`
  query GetProduct($handle: String!) {
    product(handle: $handle) {
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
      images(first: 10) {
        edges {
          node {
            id
            altText
            url(transform: { maxHeight: 700, maxWidth: 700, crop: CENTER, scale: 3 })
            smallUrl: url(transform: { maxHeight: 160, maxWidth: 160, crop: CENTER, scale: 3 })
          }
        }
      }
      descriptionHtml
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            weight
            weightUnit
            quantityAvailable
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              id
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
