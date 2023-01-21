import { useMemo, useReducer } from 'react'

import ShopifyClientContext from './ShopifyClientContext'
import { getCartIdFromStorage } from './cartStorage'
import shopifyClientReducer from './shopifyClientReducer'
import { State } from './types'

interface Props {
  children: React.ReactNode
}

export default function ShopifyClientProvider(props: Props) {
  const { children } = props
  // TODO: Add graphql client here
  const initialState: State = {
    cartId: getCartIdFromStorage(),
  }
  const [state, dispatch] = useReducer(shopifyClientReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <ShopifyClientContext.Provider value={value}>{children}</ShopifyClientContext.Provider>
}
