import { history } from 'instantsearch.js/es/lib/routers'

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''
const INDEX_NAME_PRICE_ASC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_ASC || ''
const INDEX_NAME_PRICE_DESC = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_PRICE_DESC || ''

const INDEXES = {
  [INDEX_NAME_PRICE_ASC]: 'asc',
  [INDEX_NAME_PRICE_DESC]: 'desc',
}

function getKeyByValue(object: any, value: string) {
  return Object.keys(object).find((key) => object[key] === value)
}

function getSortBySlug(name: string) {
  return INDEXES[name]
}

function getSortByName(slug: string) {
  return getKeyByValue(INDEXES, slug)
}

function getCategorySlug(name: string) {
  return name.split(' ').join('-')
}

function getCategoryName(slug: string) {
  return slug.split('-').join(' ')
}

export function getQueryToUrl(query: string) {
  return query.split(' ').join('_')
}

function getUrlToQuery(query: string) {
  return query.split('_').join(' ')
}

function getPriceSlug(name: string) {
  const prices = name.split(':')
  // no price min
  if (prices[0] === '') return `min-${prices[1]}`
  // no price max
  if (prices[1] === '') return `${prices[0]}-max`
  // min and max are set
  return `${prices[0]}-${prices[1]}`
}

function getPriceName(slug: string) {
  const prices = slug.split('-')
  if (prices.length === 1) return ''
  // no price min
  if (prices[0] === '') return `:${prices[0]}`
  // no price max
  if (prices[1] === '') return `${prices[0]}:`
  // min and max are set
  return slug.split('-').join(':')
}

export const routingLegacy = (url: string) => ({
  router: history({
    getLocation: () =>
      typeof window === 'undefined' ? (new URL(url!) as unknown as Location) : window.location,
  }),
})

export const routing = {
  router: history({
    getLocation: () => window.location,

    windowTitle({ category, query }) {
      const queryTitle = query ? `Results for "${query}"` : 'Search'

      if (category) {
        return `${category} – ${queryTitle}`
      }

      return queryTitle
    },

    createURL({ qsModule, routeState, location }) {
      const urlParts = location.href.match(/^(.*?)\/products/)
      if (!urlParts) return location.href
      const baseUrl = `${urlParts ? urlParts[1] : ''}/`

      const queryParameters: any = {}

      if (routeState.category) {
        queryParameters.category = getCategorySlug(routeState.category as string)
      }

      if (routeState.query) {
        queryParameters.query = getQueryToUrl(routeState.query as string)
      }
      if (routeState.page !== 1) {
        queryParameters.page = routeState.page
      }
      if (routeState.tags) {
        queryParameters.tags = (routeState.tags as any).map(encodeURIComponent)
      }
      if (routeState.price) {
        queryParameters.price = getPriceSlug(routeState.price as string)
      }
      if (routeState.sortBy) {
        queryParameters.sortBy = getSortBySlug(routeState.sortBy as string)
      }

      const queryString = qsModule.stringify(queryParameters, {
        addQueryPrefix: true,
        arrayFormat: 'repeat',
      })
      return `${baseUrl}products${queryString}`
    },

    parseURL({ qsModule, location }): any {
      const {
        query = '',
        page,
        category = '',
        price = '',
        tags,
        sortBy,
      } = qsModule.parse(location.search.slice(1))
      // `qs` does not return an array when there's a single value.
      const alltags = Array.isArray(tags) ? tags : [tags].filter(Boolean)

      return {
        query: getUrlToQuery(query as string),
        page,
        tags: alltags.map(decodeURIComponent as any),
        category: getCategoryName(category as string),
        price: getPriceName(price as string),
        sortBy: getSortByName(sortBy as string),
      }
    },
  }),

  stateMapping: {
    stateToRoute(uiState: any) {
      const indexUiState = uiState[INDEX_NAME] || {}
      return {
        query: indexUiState.query,
        page: indexUiState.page,
        category: indexUiState.menu?.category,
        price: indexUiState.range?.price,
        tags: indexUiState.refinementList?.tags,
        sortBy: indexUiState.sortBy,
      }
    },

    routeToState(routeState: any) {
      return {
        [INDEX_NAME]: {
          query: routeState.query,
          page: routeState.page,
          range: {
            price: routeState.price,
          },
          refinementList: {
            tags: routeState.tags,
          },
          menu: {
            category: routeState.category,
          },
          sortBy: routeState.sortBy,
        },
      }
    },
  },
}
