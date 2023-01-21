import { useMutation } from '@tanstack/react-query'

import useShopifyClient from '../useShopifyClient'

export default function useSetProductQty() {
  const { cartId } = useShopifyClient()
  return useMutation({
    mutationFn: (lineItemToUpdate: { id: string; quantity: number }) =>
      // client.checkout.updateLineItems(cartId!, [lineItemToUpdate]),
      Promise.resolve(),
  })
}
