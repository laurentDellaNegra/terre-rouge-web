import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import useAddProduct from '@/context/ShopifyClient/addProduct/useAddProduct'
import { price } from '@/lib/price'
import { track } from '@/lib/thirdParties/clientTracking'
import { UNIT_STRING } from '@/lib/weight'
import pastille from '@/public/images/pastille.png'
import { CurrencyCode, GetProductQuery } from '@/types/gql/graphql'

import Alert from '../Alert/Alert'
import RelatedProducts from '../RelatedProducts'
import Spinner from '../Spinner'
import StockBadgeState from '../StockBadgeState'
import VariantBoxes from './VariantBoxes'
import VariantColors from './VariantColors'
import { formatMetafields } from './metafields'

interface Props {
  productQuery: GetProductQuery
}

function getAvailableVariant(productQuery: GetProductQuery) {
  const productAvailable = productQuery.product?.variants.edges.find(
    (v) => Number(v.node.quantityAvailable) > 0
  )
  return productAvailable ? productAvailable.node : productQuery.product?.variants.edges[0].node
}

export default function Product(props: Props) {
  const { productQuery } = props
  const [selectedIndexImage, setSelectedIndexImage] = useState<number>(0)
  const [variant, setVariant] = useState(getAvailableVariant(productQuery))
  const [qty, setQty] = useState(1)
  const { product } = productQuery
  const images = product?.images.edges ?? []
  const { mutate, isLoading, isError, reset, isSuccess } = useAddProduct()

  // useEffect detect when the variant changes and
  // if the variant has an image, apply it
  useEffect(() => {
    const newSelectedIndex =
      product?.images.edges.findIndex(({ node }) => node.id === variant?.image?.id) ?? -1
    if (newSelectedIndex !== -1) setSelectedIndexImage(newSelectedIndex)
  }, [product?.images.edges, variant])

  // Remove the Alert message after few seconds
  useEffect(() => {
    if (!isSuccess) return
    const t = setTimeout(() => {
      reset()
    }, 4000)
    return () => clearTimeout(t)
  }, [isSuccess, reset])

  if (!product || !variant) return null

  const metafields = formatMetafields(product)
  const isPatille = !!metafields.find(
    (m) => m.key === 'conditionnement' && m.value?.includes('biodégradable')
  )
  const nbVariants = product.variants.edges.length
  const variantType = variant.selectedOptions[0].name

  const handleChangeImage = (newIndex: number) => {
    setSelectedIndexImage(newIndex)
    // Check if image is linked to a variant
    const { id } = images[newIndex].node
    const variantFound = product.variants.edges.find(({ node }) => node.image?.id === id)
    if (variantFound) setVariant(variantFound.node)
  }

  const handleAddTocart = (variantId: string, quantity: number) => {
    if (isLoading) return
    mutate(
      { variantId, quantity },
      {
        onSuccess: () => {
          // Tracking
          track('AddToCart')
        },
      }
    )
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="lg:sticky lg:top-32 col-span-7">
            <Tab.Group selectedIndex={selectedIndexImage} onChange={handleChangeImage}>
              <div className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {product.images.edges.map((image, index) => (
                      <Tab
                        key={index}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="sr-only"> {image.node.altText || product.title} </span>
                            <Image
                              src={image.node.smallUrl}
                              alt={image.node.altText || product.title}
                              className="h-full w-full object-cover object-center"
                              fill
                              priority
                            />
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
                  {product.images.edges.map((image, index) => (
                    <Tab.Panel key={index} className="focus:outline-none focus:ring">
                      <Image
                        src={image.node.url}
                        alt={image.node.altText || product.title}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                        fill
                        priority
                      />
                      {isPatille && (
                        <Image
                          src={pastille}
                          className="absolute w-24 sm:w-36 right-12"
                          alt="biodegradable and compostable certificate"
                        />
                      )}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>

          {/* Product info */}
          <div className="col-span-5 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>

            {/* Price / weight */}
            <div className="mt-3 flex gap-4">
              <p
                className={clsx(
                  variant.compareAtPrice ? 'text-primary-dark' : 'text-gray-900',
                  'text-3xl tracking-tight'
                )}
              >
                {price(variant.price.amount, variant.price.currencyCode)}
              </p>
              {variant.compareAtPrice && variant.compareAtPrice.amount !== 0 ? (
                <p className="text-3xl tracking-tight line-through text-gray-900">
                  {price(variant.compareAtPrice.amount, variant.compareAtPrice.currencyCode)}
                </p>
              ) : null}
              {variant.weight && variant.weightUnit ? (
                <p className="text-gray-600 bg-gray-200 rounded px-2 flex items-center">
                  <span>{variant.weight}</span>
                  <span>{UNIT_STRING[variant.weightUnit]}</span>
                </p>
              ) : null}
            </div>

            {/* Available */}
            <div className="mt-3">
              <h3 className="sr-only">Disponibilité</h3>
              <StockBadgeState availableForSale={variant.availableForSale} />
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="prose prose-sm space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>

            {/* Variant selection */}
            {nbVariants > 1 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900">{variantType}</h3>
                {variantType === 'Couleur' ? (
                  <VariantColors product={product} variant={variant} setVariant={setVariant} />
                ) : (
                  <VariantBoxes product={product} variant={variant} setVariant={setVariant} />
                )}
              </div>
            )}

            {/* Qty and Add to cart button */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center">
              <label htmlFor="quantity" className="sr-only">
                Quantité
              </label>
              <select
                id="quantity"
                name="quantity"
                className="max-w-full w-full sm:w-auto rounded-md border border-gray-300 py-3 text-left text-base font-medium text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[...Array(variant.quantityAvailable || 20)].map((_e, i) => {
                  const optionQty = i + 1
                  return (
                    <option key={optionQty} value={optionQty}>
                      {optionQty}
                    </option>
                  )
                })}
              </select>
              <button
                type="submit"
                disabled={!variant.availableForSale}
                className={clsx(
                  variant.availableForSale
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-200 text-gray-600 cursor-not-allowed',
                  'flex gap-3 w-full sm:w-auto flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50'
                )}
                onClick={() => handleAddTocart(variant.id, qty)}
              >
                {isLoading ? (
                  <>
                    <Spinner className="h-5 w-5 text-white" />
                    <div>Ajout en cours...</div>
                  </>
                ) : (
                  <div>Ajouter au panier</div>
                )}
              </button>
            </div>
            <Alert error show={isError} onHide={reset} className="mt-6">
              Problème lors de l&apos;ajout du produit
            </Alert>
            <Alert show={isSuccess} onHide={reset} className="mt-6">
              Produit ajouté au panier
            </Alert>
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
                      <Disclosure as="div" defaultOpen={true} key={metafield.key}>
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
        <RelatedProducts productId={product.id} />
      </div>
    </div>
  )
}
