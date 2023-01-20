import { useContext } from 'react'

import ShopifyClientContext from './ShopifyClientContext'
import { removeCheckoutIdFromStorage, setCheckoutIdFromStorage } from './checkoutStorage'

export default function useShopifyClient() {
  const context = useContext(ShopifyClientContext)
  if (context === undefined) {
    throw new Error('useShopifyClient must be used within a ShopifyClientProvider')
  }
  const { state, dispatch } = context
  const { client, checkoutId } = state

  const setCheckoutId = (id: string) => {
    if (state.checkoutId === id) return
    dispatch({ type: 'SET_CHECKOUT_ID', payload: { id } })
    setCheckoutIdFromStorage(id)
  }
  const deleteCheckoutId = () => {
    dispatch({ type: 'DELETE_CHECKOUT_ID' })
    removeCheckoutIdFromStorage()
  }

  return { state, dispatch, client, checkoutId, setCheckoutId, deleteCheckoutId }
}
