import { graphql } from '@/types/gql'

import './ShopFields'

export const RootFields = graphql(`
  fragment RootFields on QueryRoot {
    shop {
      ...ShopFields
    }
  }
`)
