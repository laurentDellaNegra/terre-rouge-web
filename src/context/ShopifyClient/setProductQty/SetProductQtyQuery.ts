import { graphql } from '@/types/gql'

export const SetProductQtyQuery = graphql(`
  mutation SetProductQtyQuery($cartId: ID!, $id: ID!, $quantity: Int!) {
    cartLinesUpdate(cartId: $cartId, lines: { id: $id, quantity: $quantity }) {
      cart {
        id
      }
    }
  }
`)
