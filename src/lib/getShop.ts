import { GetShop } from 'graphql/GetShop'

import graphQLRequestClient from './clients/graphQLRequestClient'

export const GET_SHOP_QUERY_KEY = 'GetShop'
export const getShop = () => graphQLRequestClient.request(GetShop, {})
