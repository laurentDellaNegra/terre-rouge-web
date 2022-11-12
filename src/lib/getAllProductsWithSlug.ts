import { GetAllProductsWithSlug } from 'graphql/GetAllProductsWithSlug'

import graphQLRequestClient from './clients/graphQLRequestClient'

export default function getAllProductsWithSlug() {
  return graphQLRequestClient.request(GetAllProductsWithSlug)
}
