import { CollectionEdge } from '@/types/gql/graphql'

import { getCategorySlug } from './betterUrl'

export const MENU_ROOT = [
  {
    href: '/epices',
    title: 'Épices',
  },
  {
    href: '/condiments',
    title: 'Condiments',
  },
  {
    href: '/arts-de-table',
    title: 'Arts de table',
  },
  {
    href: '/engagements',
    title: 'Engagements',
  },
]

// collections: [
//   {
//     name: 'Épices',
//     href: '#',
//     categories: [
//       { name: 'Vanille', href: '#' },
//       { name: 'Curry', href: '#' },
//       { name: 'Piments', href: '#' },
//     ],
//   },
//   ...
// ]

export const getMenuCollections = (collections: Array<CollectionEdge>) => {
  const collectionsRaw = collections
    // Filter with only hardcoded menu
    .filter((c) => MENU_ROOT.map((M) => M.title).includes(c.node.title))
    .map(({ node: collection }) => ({
      name: collection.title,
      href: `/${collection.handle}`,
      categories: collection.products.edges.map(({ node: product }) => ({
        name: product.productType,
        href: `/${collection.handle}/?category=${getCategorySlug(product.productType)}`,
      })),
    }))
  // remove duplicates
  for (let index = 0; index < collectionsRaw.length; index++) {
    const element = collectionsRaw[index]
    element.categories = [...new Map(element.categories.map((c) => [c.name, c])).values()]
  }
  console.log(collectionsRaw)
  return collectionsRaw
}
