import { usePagination } from 'react-instantsearch-hooks-web'

import Pagination from '@/components/UI/Pagination'
import { scrollToTop } from '@/lib/window'

export default function ProductsPagination() {
  const pagination = usePagination()
  const { isFirstPage, isLastPage, nbPages, pages, refine, currentRefinement } = pagination
  const handleOnChange = (page: number) => {
    refine(page)
    scrollToTop()
  }
  return (
    <Pagination
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      currentPage={currentRefinement}
      nbPages={nbPages}
      pages={pages}
      onChange={handleOnChange}
    />
  )
}
