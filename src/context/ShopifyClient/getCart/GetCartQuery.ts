import { graphql } from '@/types/gql'

export const GetCartQuery = graphql(`
  query GetCartQuery($id: ID!) {
    cart(id: $id) {
      id
      createdAt
      updatedAt
      lines(first: 30) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                selectedOptions {
                  name
                  value
                }
                image {
                  altText
                  url(transform: { maxHeight: 160, maxWidth: 160, crop: CENTER, scale: 3 })
                }
                product {
                  title
                  handle
                }
                price {
                  amount
                  currencyCode
                }
                quantityAvailable
              }
            }
            attributes {
              key
              value
            }
          }
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      totalQuantity
      checkoutUrl
    }
  }
`)
