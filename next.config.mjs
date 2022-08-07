/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
}

export default nextConfig
