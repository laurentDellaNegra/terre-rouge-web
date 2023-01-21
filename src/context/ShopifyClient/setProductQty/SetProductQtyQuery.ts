import { graphql } from '@/types/gql'

export const AddProductQuery = graphql(`
  mutation AddProductQuery($cartId: ID!, $merchandiseId: ID!, $quantity: Int!) {
    cartLinesAdd(cartId: $cartId, lines: { merchandiseId: $merchandiseId, quantity: $quantity }) {
      cart {
        id
      }
    }
  }
`)
