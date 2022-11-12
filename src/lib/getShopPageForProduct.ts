import { QueryFunctionContext } from '@tanstack/react-query'
import { GetShop } from 'graphql/GetShop'
import { GetShopPageForProduct } from 'graphql/GetShopPageForProduct'

import graphQLRequestClient from './clients/graphQLRequestClient'

export default async function getShopPageForProduct({ queryKey }: QueryFunctionContext) {
  const [_key, handle] = queryKey
  return graphQLRequestClient.request(GetShopPageForProduct, { handle: handle as string })
}
