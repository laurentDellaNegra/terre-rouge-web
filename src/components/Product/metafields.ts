import { GetProductQuery } from '@/types/gql/graphql'

export const formatMetafields = (product: GetProductQuery['product']) =>
  product
    ? [
        {
          ...product.application,
          list:
            product.application?.value.indexOf('*') !== -1
              ? product.application?.value.split('*').map((value) => value.trim())
              : null,
          name: 'Utilisation',
        },
        {
          ...product.benefits,
          list:
            product.benefits?.value.indexOf('*') !== -1
              ? product.benefits?.value.split('*').map((value) => value.trim())
              : null,
          name: 'Bienfaits',
        },
        {
          ...product.composition,
          list:
            product.composition?.value.indexOf('*') !== -1
              ? product.composition?.value.split('*').map((value) => value.trim())
              : null,
          name: 'Composition',
        },
        {
          ...product.conditionnement,
          list:
            product.conditionnement?.value.indexOf('*') !== -1
              ? product.conditionnement?.value.split('*').map((value) => value.trim())
              : null,
          name: 'Conditionnement',
        },
      ]
    : []
