import { useMutation } from '@tanstack/react-query'

import useShopifyClient from './useShopifyClient'

export default function useRemoveProduct() {
  const { checkoutId, client } = useShopifyClient()
  return useMutation({
    mutationFn: (lineItemToRemove: string) =>
      client.checkout.removeLineItems(checkoutId!, [lineItemToRemove]),
  })
}
