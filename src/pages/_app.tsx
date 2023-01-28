import '@algolia/autocomplete-theme-classic'
import { Inter } from '@next/font/google'
import { captureException, captureMessage } from '@sentry/nextjs'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import ShopifyClientProvider from '@/context/ShopifyClient/ShopifyClientProvider'
import UIStateProvider from '@/context/UIState/UIStateProvider'
import '@/styles/algolia.css'
import '@/styles/globals.css'
import '@/styles/rheostat.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // CORS errors By default we disable the auto refetch on all requests
            // Because all pages are statically generated
            // TODO: create a proxy with rewrite to avoid that
            staleTime: Infinity,
          },
        },
        logger: {
          log: (message) => {
            captureMessage(message)
          },
          warn: (message) => {
            captureMessage(message)
          },
          error: (error) => {
            captureException(error)
          },
        },
      })
  )

  /**
   * WORKAROUND TO SOLVE THE NEXTJS + ALGOLIA ROUTE ISSUE
   * https://github.com/algolia/instantsearch/issues/5241
   *
   */
  useEffect(() => {
    const handleRouteChange = () => {
      if (/produits|epices|condiments|arts-de-table/.test(window.location.href))
        window.location.reload()
    }
    window.addEventListener('popstate', handleRouteChange)
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])
  /**
   * ====================================================
   * ====================================================
   * ====================================================
   */

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ShopifyClientProvider>
            <UIStateProvider>
              <Component {...pageProps} />
            </UIStateProvider>
          </ShopifyClientProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
