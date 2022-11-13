import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  crumb?: Array<{ title: string; route?: string }>
  className: string
}

export default function Breadcrumb(props: Props) {
  const { className, crumb } = props
  return crumb && crumb.length > 1 ? (
    <div className={className}>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol role="list" className="flex items-center space-x-4">
          {crumb.map((c, index, array) => {
            if (index === array.length - 1) {
              return (
                <li
                  key={c.title}
                  className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  {c.title}
                </li>
              )
            }
            return (
              <li key={c.title}>
                <div className="flex items-center">
                  <Link href={c.route || '#'}>
                    <a className="mr-4 text-sm font-medium text-gray-900">{c.title}</a>
                  </Link>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  ) : null
}
