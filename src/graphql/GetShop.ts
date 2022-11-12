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
  }
`)
