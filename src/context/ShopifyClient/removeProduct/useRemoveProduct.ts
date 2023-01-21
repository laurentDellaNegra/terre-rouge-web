import { useMutation, useQueryClient } from '@tanstack/react-query'
import produce from 'immer'

import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'
import { Cart, GetCartQueryQuery } from '@/types/gql/graphql'

import { getCartKey } from '../getCart/useGetCart'
import useShopifyClient from '../useShopifyClient'
import { RemoveProductQuery } from './RemoveProductQuery'

export default function useRemoveProduct() {
  const queryClient = useQueryClient()
  const { cartId } = useShopifyClient()
  return useMutation({
    mutationFn: (lineItemToRemove: string) =>
      graphQLRequestClient.request(RemoveProductQuery, {
        cartId: cartId!,
        lineId: lineItemToRemove,
      }),
    // Optimistic update
    onMutate: async (lineItemToRemove) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: getCartKey(cartId) })

      // Snapshot the current cache
      const previousCart = queryClient.getQueryData<Cart>(getCartKey(cartId))
      console.log('previousCart', previousCart)

      // Optimistically delete the item in the list
      if (previousCart) {
        queryClient.setQueryData<Cart>(getCartKey(cartId), (oldCart) => {
          return produce(oldCart, (draft) => {
            if (!draft || !oldCart) return
            draft.lines.edges = oldCart.lines.edges.filter(
              ({ node }) => node.id !== lineItemToRemove
            )
          })
        })
      }
      // oldCart?.cart?.lines?.edges?.filter(({ node }) => node.id !== lineItemToRemove)
      // ({
      //   ...oldCart,
      //   lines: {}
      // })
      // oldCart?.lines.edges.filter(({ node }) => node.id !== lineItemToRemove)

      // Return a context with the previous list in case of an error
      return { previousCart }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_err, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(getCartKey(cartId), context.previousCart)
      }
      console.error('Cannot delete item')
    },
    // Always refetch after error or success:
    onSettled: () => queryClient.invalidateQueries({ queryKey: getCartKey(cartId) }),
  })
}
