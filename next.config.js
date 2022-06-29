/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
}

module.exports = nextConfig
