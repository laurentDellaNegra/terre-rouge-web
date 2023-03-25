import { useMutation, useQueryClient } from '@tanstack/react-query'
import produce from 'immer'

import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'
import { Cart } from '@/types/gql/graphql'

import { getCartKey } from '../getCart/useGetCart'
import useShopifyClient from '../useShopifyClient'
import { SetProductQtyQuery } from './SetProductQtyQuery'

export default function useSetProductQty() {
  const queryClient = useQueryClient()
  const { cartId } = useShopifyClient()
  return useMutation({
    mutationFn: (lineItemToUpdate: { id: string; quantity: number }) =>
      graphQLRequestClient.request(SetProductQtyQuery, {
        cartId: cartId!,
        id: lineItemToUpdate.id,
        quantity: lineItemToUpdate.quantity,
      }),
    // Optimistic update
    onMutate: async (lineItemToUpdate) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: getCartKey(cartId) })

      // Snapshot the current cache
      const previousCart = queryClient.getQueryData<Cart>(getCartKey(cartId))

      // Optimistically update the item in the list
      if (previousCart) {
        queryClient.setQueryData<Cart>(getCartKey(cartId), (oldCart) => {
          const idxLineItemToUpdate = oldCart?.lines.edges.findIndex(
            ({ node }) => node.id === lineItemToUpdate.id
          )
          if (
            idxLineItemToUpdate === null ||
            idxLineItemToUpdate === undefined ||
            idxLineItemToUpdate === -1
          )
            return
          return produce(oldCart, (draft) => {
            if (!draft || !oldCart) return
            draft.lines.edges[idxLineItemToUpdate].node.quantity = lineItemToUpdate.quantity
          })
        })
      }

      // Return a context with the previous list in case of an error
      return { previousCart }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_err, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(getCartKey(cartId), context.previousCart)
      }
      console.error('Cannot set this quantity to this product')
    },
    // Always refetch after error or success:
    onSettled: () => queryClient.invalidateQueries({ queryKey: getCartKey(cartId) }),
  })
}
