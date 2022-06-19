export default async function graphqlFetch(query: string, { variables = {} } = {}) {
  if (!process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_URL) {
    throw new Error('Environment variable "NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_URL" is not defined')
  }
  if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error(
      'Environment variable "NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN" is not defined'
    )
  }

  const res = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (res.status !== 200) {
    // console.error(await res.text());
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()

  if (json.errors) {
    // console.error(json.errors);
    throw new Error('Failed to fetch API')
  }

  return json.data
}
