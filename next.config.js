/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  //TODO: might break in the future
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig
