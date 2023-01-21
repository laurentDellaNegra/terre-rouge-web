import { graphql } from '@/types/gql'

export const RemoveProductQuery = graphql(`
  mutation RemoveProductQuery($cartId: ID!, $lineId: ID!) {
    cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
      cart {
        id
      }
    }
  }
`)
