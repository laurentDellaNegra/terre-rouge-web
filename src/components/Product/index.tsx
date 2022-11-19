import { Disclosure, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon, ShieldCheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { price } from '@/lib/price'
import { GetShopPageForProductQuery } from '@/types/gql/graphql'

interface Props {
  product: GetShopPageForProductQuery
}

const UNIT_STRING: any = {
  KILOGRAMS: 'kg',
  GRAMS: 'g',
}

export default function Product(props: Props) {
  const { product } = props
  //TMP: Format metafields
  const metafields = [
    {
      ...product.productByHandle?.application,
      list:
        product.productByHandle?.application?.value.indexOf('*') !== -1
          ? product.productByHandle?.application?.value.split('*').map((value) => value.trim())
          : null,
      name: 'Utilisation',
    },
    {
      ...product.productByHandle?.benefits,
      list:
        product.productByHandle?.benefits?.value.indexOf('*') !== -1
          ? product.productByHandle?.benefits?.value.split('*').map((value) => value.trim())
          : null,
      name: 'Bienfaits',
    },
    {
      ...product.productByHandle?.composition,
      list:
        product.productByHandle?.composition?.value.indexOf('*') !== -1
          ? product.productByHandle?.composition?.value.split('*').map((value) => value.trim())
          : null,
      name: 'Composition',
    },
  ]

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl py-4 xs:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="lg:sticky lg:top-32 col-span-7">
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.productByHandle?.images.edges.map((image, index) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">
                            {' '}
                            {image.node.altText || product.productByHandle?.title}{' '}
                          </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img
                              src={image.node.transformedSrc}
                              alt={image.node.altText || product.productByHandle?.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={clsx(
                              selected ? 'ring-primarytext-primary-light' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.productByHandle?.images.edges.map((image, index) => (
                  <Tab.Panel key={index} className="focus:outline-none focus:ring">
                    <img
                      src={image.node.transformedSrc}
                      alt={image.node.altText || product.productByHandle?.title}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Product info */}
          <div className="col-span-5 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.productByHandle?.title}
            </h1>

            {/* Price / weight */}
            <div className="mt-3 flex gap-4">
              <p className="text-3xl tracking-tight text-gray-900">
                {price(
                  product.productByHandle?.variants.edges[0].node.priceV2.amount,
                  product.productByHandle?.variants.edges[0].node.priceV2.currencyCode
                )}
              </p>
              {product.productByHandle &&
              product.productByHandle.variants.edges[0].node.weight &&
              product.productByHandle.variants.edges[0].node.weightUnit ? (
                <p className="text-gray-600 bg-gray-200 rounded px-2 flex items-center">
                  <span>{product.productByHandle?.variants.edges[0].node.weight}</span>
                  <span>
                    {UNIT_STRING[product.productByHandle?.variants.edges[0].node.weightUnit]}
                  </span>
                </p>
              ) : null}
            </div>

            {/* Available */}
            <div className="mt-3">
              <h3 className="sr-only">Disponibilité</h3>
              {product.productByHandle?.variants.edges[0].node.availableForSale ? (
                <span className="bg-primary-extra-light text-primary py-1 px-3 rounded-full">
                  En stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-500 py-1 px-3 rounded-full">
                  Rupture de stock
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="prose prose-sm space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.productByHandle?.descriptionHtml }}
              />
            </div>

            {/* Add to cart button */}
            <div className="mt-6 flex gap-3 items-center">
              <div className="">
                <label htmlFor="quantity" className="sr-only">
                  Quantité
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  className="max-w-full rounded-md border border-gray-300 py-3 text-left text-base font-medium text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={!product.productByHandle?.variants.edges[0].node.availableForSale}
                className={clsx(
                  product.productByHandle?.variants.edges[0].node.availableForSale
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-200 text-gray-600 cursor-not-allowed',
                  'flex flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
                )}
                onClick={() => console.log('Add to cart')}
              >
                Ajouter au panier
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">Paiement sécurisé</span>
              </a>
            </div>

            {/* Metafields */}
            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Informations supplémentaires
              </h2>

              {metafields.length > 0 ? (
                <div className="divide-y divide-gray-200 border-t">
                  {metafields.map((metafield) =>
                    metafield.key ? (
                      <Disclosure as="div" key={metafield.key}>
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                <span
                                  className={clsx(
                                    open ? 'text-primary' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {metafield.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="block h-6 w-6 text-primary-light group-hover:text-primary"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                              {metafield.list && metafield.list?.length > 0 ? (
                                <ul role="list">
                                  {metafield.list?.map((value) => (
                                    <li key={value} className="first-letter:capitalize">
                                      {value}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{metafield.value}</p>
                              )}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : null
                  )}
                </div>
              ) : null}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
