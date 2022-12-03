import { graphql } from '@/types/gql'

export const GetShop = graphql(`
  query GetShop {
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
    collections(first: 4) {
      edges {
        node {
          title
          handle
          products(first: 50) {
            edges {
              node {
                productType
              }
            }
          }
        }
      }
    }
  }
`)
