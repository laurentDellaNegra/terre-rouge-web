import { GraphQLClient } from 'graphql-request'

const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || ''
const SHOPIFY_GRAPHQL_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_URL || ''

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
}

const graphQLRequestClient = new GraphQLClient(SHOPIFY_GRAPHQL_API_URL, {
  headers,
})

export default graphQLRequestClient
