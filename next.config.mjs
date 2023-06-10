import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //TODO: Workaround to make SSR works with InstantSearch
  // https://github.com/algolia/react-instantsearch/issues/3537
  // reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  sentry: {
    hideSourceMaps: false,
  },
  experimental: {
    nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Analyse size bundle
const bundleAnalyserConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
export default withSentryConfig(bundleAnalyserConfig, sentryWebpackPluginOptions)
