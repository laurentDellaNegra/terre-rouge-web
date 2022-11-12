import { graphql } from '@/types/gql'

export const GetAllProductsWithSlug = graphql(`
  query GetAllProductsWithSlug {
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`)
