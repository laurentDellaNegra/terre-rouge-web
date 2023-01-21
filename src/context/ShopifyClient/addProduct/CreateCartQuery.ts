import { graphql } from '@/types/gql'

export const CreateCartQuery = graphql(`
  mutation CreateCartQuery($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(input: { lines: { merchandiseId: $merchandiseId, quantity: $quantity } }) {
      cart {
        id
      }
    }
  }
`)
