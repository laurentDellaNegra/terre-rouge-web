import connectStats from 'instantsearch.js/es/connectors/stats/connectStats'
import { useConnector } from 'react-instantsearch-hooks-web'

export function useStats(props: any) {
  return useConnector(connectStats, props)
}

interface Props {
  title?: string
}

export function Stats(props: Props) {
  const { title } = props
  const {
    // hitsPerPage,
    nbHits,
    // areHitsSorted,
    // nbSortedHits,
    // nbPages,
    // page,
    // processingTimeMS,
    query,
  } = useStats(props) as any

  return query ? (
    <span className="">
      <span className="text-primary">{nbHits}&nbsp;</span>
      <span>produit{nbHits > 1 ? 's' : ''} pour&nbsp;</span>
      <span className="text-primary">&quot;{query}&quot;</span>
    </span>
  ) : title ? (
    <span className="">
      <span>Nos&nbsp;</span>
      <span className="text-primary">{title}</span>
    </span>
  ) : (
    <span className="">
      <span>Tous nos&nbsp;</span>
      <span className="text-primary">produits</span>
    </span>
  )
}
