import { useMemo, useReducer } from 'react'
import Client from 'shopify-buy'

import ShopifyClientContext from './ShopifyClientContext'
import { getCheckoutIdFromStorage } from './checkoutStorage'
import shopifyClientReducer from './shopifyClientReducer'
import { State } from './types'

interface Props {
  storefrontAccessToken: string
  domain: string
  children: React.ReactNode
}

export default function ShopifyClientProvider(props: Props) {
  const { children, domain, storefrontAccessToken } = props
  const initialState: State = {
    client: Client.buildClient({
      domain,
      storefrontAccessToken,
    }),
    checkoutId: getCheckoutIdFromStorage(),
  }
  const [state, dispatch] = useReducer(shopifyClientReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <ShopifyClientContext.Provider value={value}>{children}</ShopifyClientContext.Provider>
}
