import { useQuery } from '@tanstack/react-query'

import useShopifyClient from './useShopifyClient'

export default function useGetCheckout() {
  const { checkoutId, client } = useShopifyClient()
  return useQuery({
    queryKey: ['checkout', checkoutId],
    queryFn: () => client.checkout.fetch(checkoutId!),
    enabled: !!checkoutId,
  })
}
