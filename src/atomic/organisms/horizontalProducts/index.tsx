import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0648/1500/5911/products/IMG20211128170406.jpg?v=1655641838',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 2,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0648/1500/5911/products/IMG20211128165722.jpg?v=1655641841',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 3,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0648/1500/5911/products/IMG20211128165158.jpg?v=1655641844',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 4,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0648/1500/5911/products/vanilla1.jpg?v=1655641846',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]

export default function HorizontalProducts() {
  return (
    <div className="bg-gray-100">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden sm:block text-sm font-semibold text-primary hover:text-primary-light"
          >
            See everything<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
