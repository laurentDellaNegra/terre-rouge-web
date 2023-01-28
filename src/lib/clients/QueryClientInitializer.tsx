import { captureException, captureMessage } from '@sentry/nextjs'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

export default function QueryClientInitializer({
  dehydratedState,
  children,
}: {
  dehydratedState: any
  children: ReactNode
}) {
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

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
