import { GetShop } from 'graphql/GetShop'

import graphQLRequestClient from './clients/graphQLRequestClient'

export default async function getShopPageForProducts() {
  return graphQLRequestClient.request(GetShop)
}
