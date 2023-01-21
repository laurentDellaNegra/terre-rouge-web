import { useContext } from 'react'

import ShopifyClientContext from './ShopifyClientContext'
import { removeCartIdFromStorage, setCartIdFromStorage } from './cartStorage'

export default function useShopifyClient() {
  const context = useContext(ShopifyClientContext)
  if (context === undefined) {
    throw new Error('useShopifyClient must be used within a ShopifyClientProvider')
  }
  const { state, dispatch } = context
  const { cartId } = state

  const setCartId = (id: string) => {
    if (state.cartId === id) return
    dispatch({ type: 'SET_CART_ID', payload: { id } })
    setCartIdFromStorage(id)
  }
  const deleteCartId = () => {
    dispatch({ type: 'DELETE_CART_ID' })
    removeCartIdFromStorage()
  }

  return { state, dispatch, cartId, setCartId, deleteCartId }
}
