import Button from '@/atomic/atoms/Button'

interface Props {
  isFirstPage: boolean
  isLastPage: boolean
  currentPage: number
  pages: Array<number>
  nbPages: number
  onChange: (page: number) => void
}

export default function Pagination(props: Props) {
  const { isFirstPage, isLastPage, pages, nbPages, onChange, currentPage } = props
  const display3dotsAndLastPage = pages[pages.length - 1] !== nbPages - 1
  return nbPages > 1 ? (
    <nav
      aria-label="Pagination"
      className="mx-auto mt-6 flex max-w-7xl justify-between text-sm font-medium text-gray-700"
    >
      <div className="min-w-0 flex-1">
        {!isFirstPage && <Button onClick={() => onChange(currentPage - 1)}>Précédent</Button>}
      </div>
      <div className="hidden space-x-2 md:flex">
        {pages.map((page: number) => (
          <Button
            active={currentPage === page}
            disabled={currentPage === page}
            key={page}
            onClick={() => onChange(page)}
          >
            {page + 1}
          </Button>
        ))}
        {display3dotsAndLastPage ? (
          <>
            <span className="inline-flex h-10 items-center px-1.5 text-gray-500">...</span>
            <Button onClick={() => onChange(nbPages - 1)}>{nbPages}</Button>
          </>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 justify-end">
        {!isLastPage && <Button onClick={() => onChange(currentPage + 1)}>Suivant</Button>}
      </div>
    </nav>
  ) : null
}
