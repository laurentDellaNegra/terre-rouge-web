import { graphql } from '@/types/gql'

export const VariantFields = graphql(`
  fragment VariantFields on ProductVariant {
    id
    title
    availableForSale
    weight
    weightUnit
    priceV2 {
      amount
      currencyCode
    }
    compareAtPriceV2 {
      amount
      currencyCode
    }
    selectedOptions {
      name
      value
    }
    image {
      altText
      originalSrc
      transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)
    }
  }
`)
