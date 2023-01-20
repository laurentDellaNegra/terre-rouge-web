import { useMutation } from '@tanstack/react-query'

import useShopifyClient from './useShopifyClient'

export default function useSetProductQty() {
  const { checkoutId, client } = useShopifyClient()
  return useMutation({
    mutationFn: (lineItemToUpdate: { id: string; quantity: number }) =>
      client.checkout.updateLineItems(checkoutId!, [lineItemToUpdate]),
  })
}
