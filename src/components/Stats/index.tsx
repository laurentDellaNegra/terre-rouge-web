import connectStats from 'instantsearch.js/es/connectors/stats/connectStats'
import { useConnector } from 'react-instantsearch-hooks-web'

export function useStats(props: any) {
  return useConnector(connectStats, props)
}

export function Stats(props: any) {
  const {
    // hitsPerPage,
    nbHits,
    // areHitsSorted,
    // nbSortedHits,
    // nbPages,
    // page,
    // processingTimeMS,
    // query,
  } = useStats(props) as any

  return (
    <span className="">
      <span className="text-primary">{nbHits}&nbsp;</span>
      <span>produit{nbHits > 1 ? 's' : ''}</span>
    </span>
  )
}
