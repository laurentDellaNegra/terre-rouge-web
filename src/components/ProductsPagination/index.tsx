import { usePagination } from 'react-instantsearch-hooks-web'

import Pagination from '@/atomic/organisms/Pagination'

export default function ProductsPagination() {
  const pagination = usePagination()
  const { isFirstPage, isLastPage, nbPages, pages, refine, currentRefinement } = pagination
  return (
    <Pagination
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      currentPage={currentRefinement}
      nbPages={nbPages}
      pages={pages}
      onChange={refine}
    />
  )
}
