import { createContext } from 'react'

import { Dispatch, State } from './types'

const ShopifyClientContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)
ShopifyClientContext.displayName = 'ShopifyClientContext'
export default ShopifyClientContext
