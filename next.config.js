/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  //TODO: Workaround to make SSR works with InstantSearch
  // https://github.com/algolia/react-instantsearch/issues/3537
  // reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  //TODO: might break in the future
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig
