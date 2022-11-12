import { graphql } from '@/types/gql'

export const ShopFields = graphql(`
  fragment ShopFields on Shop {
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
`)
