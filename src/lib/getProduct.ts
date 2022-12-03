import { QueryFunctionContext } from '@tanstack/react-query'
import { GetProduct } from 'graphql/GetProduct'

import graphQLRequestClient from './clients/graphQLRequestClient'

export const GET_PRODUCT_QUERY_KEY = 'GetProduct'
export default function getProduct({ queryKey }: QueryFunctionContext) {
  const [_key, handle] = queryKey
  return graphQLRequestClient.request(GetProduct, { handle: handle as string })
}
