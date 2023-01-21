import { useMutation, useQueryClient } from '@tanstack/react-query'

import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'

import useShopifyClient from '../useShopifyClient'
import { AddProductQuery } from './AddProductQuery'
import { CreateCartQuery } from './CreateCartQuery'

export default function useAddProduct() {
  const { cartId, setCartId, deleteCartId } = useShopifyClient()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (lineItemToAdd: { variantId: string; quantity: number }) => {
      // if no checkout, we create one
      if (!cartId) {
        return graphQLRequestClient.request(CreateCartQuery, {
          merchandiseId: lineItemToAdd.variantId,
          quantity: lineItemToAdd.quantity,
        })
      }
      return graphQLRequestClient.request(AddProductQuery, {
        cartId: cartId,
        merchandiseId: lineItemToAdd.variantId,
        quantity: lineItemToAdd.quantity,
      })
    },
    onSuccess(data, _variables, _context) {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      // if no cart id we set it in localstorage
      if (cartId) return
      setCartId((data as any).cartCreate.cart.id)
    },
    // If there is an error, we retry by cleaning the cartId
    // TODO: Don't work
    // Find a way to launch again the query with empty cartId
    onError() {
      deleteCartId()
    },
  })
}
