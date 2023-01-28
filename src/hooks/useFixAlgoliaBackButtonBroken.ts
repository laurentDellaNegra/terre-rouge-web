import { useEffect } from 'react'

export default function useFixAlgoliaBackButtonBroken() {
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
}
