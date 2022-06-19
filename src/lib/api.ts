import graphqlFetch from './graphql-fetch'

const ShopFields = `
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
`

const RootFields = `
  fragment RootFields on QueryRoot {
    shop {
      ...ShopFields
    }
  }
  ${ShopFields}
`

const ProductFields = `
  fragment ProductFields on Product {
    id
    handle
    title
    productType
    tags
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 100) {
      edges {
        node {
          altText
          originalSrc
          transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)
        }
      }
    }
  }
`

const VariantFields = `
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
`

export async function getShopPageForHome() {
  const query = `
  query Products($maxWidth: Int = 384, $maxHeight: Int = 384) {
    ...RootFields
    products(first: 100, query: "product_type:vanille OR product_type:epice OR product_type:coffret") {
      edges {
        node {
          ...ProductFields
          variants(first: 10) {
            edges {
              node {
                ...VariantFields
              }
            }
          }
        }
      }
    }
  }
  ${RootFields}
  ${ProductFields}
  ${VariantFields}
`
  const data = await graphqlFetch(query)
  return data
}
