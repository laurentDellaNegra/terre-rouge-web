import { GetShopPageForHome } from 'graphql/GetShopPageForHome'

import graphQLRequestClient from './clients/graphQLRequestClient'

export default async function getShopPageForHome() {
  return graphQLRequestClient.request(GetShopPageForHome, {})
}
