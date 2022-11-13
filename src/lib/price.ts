import { CurrencyCode } from '@/types/gql/graphql'

export const price = (amount: any, currency: CurrencyCode = CurrencyCode.Eur) => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency,
  })
  return formatter.format(amount)
}
