export default function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      className="mx-auto mt-6 flex max-w-7xl justify-between text-sm font-medium text-gray-700"
    >
      <div className="min-w-0 flex-1">
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          Previous
        </a>
      </div>
      <div className="hidden space-x-2 sm:flex">
        {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          3
        </a>
        <span className="inline-flex h-10 items-center px-1.5 text-gray-500">...</span>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          10
        </a>
      </div>
      <div className="flex min-w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          Next
        </a>
      </div>
    </nav>
  )
}
