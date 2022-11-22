import algoliasearch from 'algoliasearch/lite'

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
export const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''
export const INDEX_QUERY_SUGGESTIONS =
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME_QUERY_SUGGESTIONS || ''

export const searchClient = algoliasearch(APP_ID, API_KEY)
