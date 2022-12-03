import { GetOurSelection } from 'graphql/GetOurSelection'

import graphQLRequestClient from './clients/graphQLRequestClient'

export const GET_HOME_PAGE_PRODUCTS_QUERY_KEY = 'GetOurSelection'
export const getOurSelection = () => graphQLRequestClient.request(GetOurSelection, {})
