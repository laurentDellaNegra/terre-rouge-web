import { useQuery } from '@tanstack/react-query'

import graphQLRequestClient from '@/lib/clients/graphQLRequestClient'

import useShopifyClient from '../useShopifyClient'
import { GetCartQuery } from './GetCartQuery'

export const getCartKey = (id: string | null) => ['cart', id]

export default function useGetCart() {
  const { cartId, deleteCartId } = useShopifyClient()
  return useQuery({
    queryKey: getCartKey(cartId),
    queryFn: async () => {
      const { cart } = await graphQLRequestClient.request(GetCartQuery, { id: cartId! })
      return cart
    },
    onError: deleteCartId,
    enabled: !!cartId,
  })
}
