import '@algolia/autocomplete-theme-classic'
import type { AppProps } from 'next/app'

import InjectFont from '@/components/InjectFont'
import ShopifyClientProvider from '@/context/ShopifyClient/ShopifyClientProvider'
import UIStateProvider from '@/context/UIState/UIStateProvider'
import useFixAlgoliaBackButtonBroken from '@/hooks/useFixAlgoliaBackButtonBroken'
import QueryClientInitializer from '@/lib/clients/QueryClientInitializer'
import '@/styles/algolia.css'
import '@/styles/globals.css'
import '@/styles/rheostat.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  //WORKAROUND TO SOLVE THE NEXTJS + ALGOLIA ROUTE ISSUE
  useFixAlgoliaBackButtonBroken()

  return (
    <>
      <InjectFont />
      <QueryClientInitializer dehydratedState={pageProps.dehydratedState}>
        <ShopifyClientProvider>
          <UIStateProvider>
            <Component {...pageProps} />
          </UIStateProvider>
        </ShopifyClientProvider>
      </QueryClientInitializer>
    </>
  )
}
