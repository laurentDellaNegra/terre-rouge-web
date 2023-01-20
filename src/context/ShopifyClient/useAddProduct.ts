import { useMutation } from '@tanstack/react-query'

import useShopifyClient from './useShopifyClient'

export default function useAddProduct() {
  const { checkoutId, client, setCheckoutId } = useShopifyClient()
  return useMutation({
    mutationFn: async (lineItemToAdd: { variantId: string; quantity: number }) => {
      // if no checkout, we create one
      let id = checkoutId
      if (!id) {
        const checkout = await client.checkout.create()
        id = checkout.id.toString()
      }
      return client.checkout.addLineItems(id, [lineItemToAdd])
    },
    onSuccess(data, _variables, _context) {
      // if checkout id is not the same
      setCheckoutId(data.id.toString())
    },
  })
}
