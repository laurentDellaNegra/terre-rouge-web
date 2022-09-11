import { history } from 'instantsearch.js/es/lib/routers'

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''

function getCategorySlug(name: string) {
  return name.split(' ').join('-')
}

function getCategoryName(slug: string) {
  return slug.split('-').join(' ')
}

function getPriceSlug(name: string) {
  return name.split(':').join('-')
}

function getPriceName(slug: string) {
  return slug.split('-').join(':')
}

export const routingLegacy = (url: string) => ({
  router: history({
    getLocation: () =>
      typeof window === 'undefined' ? (new URL(url!) as unknown as Location) : window.location,
  }),
})

export const routing = (url: string) => ({
  router: history({
    getLocation: () =>
      typeof window === 'undefined' ? (new URL(url!) as unknown as Location) : window.location,

    windowTitle({ category, query }) {
      const queryTitle = query ? `Results for "${query}"` : 'Search'

      if (category) {
        return `${category} – ${queryTitle}`
      }

      return queryTitle
    },

    createURL({ qsModule, routeState, location }) {
      const urlParts = location.href.match(/^(.*?)\/products/)
      const baseUrl = `${urlParts ? urlParts[1] : ''}/`

      const queryParameters: any = {}

      if (routeState.category) {
        queryParameters.category = getCategorySlug(routeState.category as string)
      }

      if (routeState.query) {
        queryParameters.query = encodeURIComponent(routeState.query as string)
      }
      if (routeState.page !== 1) {
        queryParameters.page = routeState.page
      }
      if (routeState.tags) {
        queryParameters.tags = (routeState.tags as any).map(encodeURIComponent)
      }
      if (routeState.price !== '0:') {
        queryParameters.price = getPriceSlug(routeState.price as string)
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
      } = qsModule.parse(location.search.slice(1))
      // `qs` does not return an array when there's a single value.
      const alltags = Array.isArray(tags) ? tags : [tags].filter(Boolean)

      return {
        query: decodeURIComponent(query as string),
        page,
        tags: alltags.map(decodeURIComponent as any),
        category: getCategoryName(category as string),
        price: getPriceName(price as string),
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
})
