import { Dialog } from '@headlessui/react'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'

import ButtonLink from '@/atomic/atoms/ButtonLink'
import Alert from '@/components/Alert/Alert'
import useGetCart from '@/context/ShopifyClient/getCart/useGetCart'
import useRemoveProduct from '@/context/ShopifyClient/removeProduct/useRemoveProduct'
import { price } from '@/lib/price'

import { EmptyCart } from './EmptyCart'

interface Props {
  onClose: () => void
}

export default function Cart({ onClose }: Props) {
  const { data: cart, isLoading: isCartLoading } = useGetCart()
  // TODO: remove
  // const isLoading = true
  const { mutate: removeProduct, isError, reset, isLoading: isRemoveLoading } = useRemoveProduct()
  const isEmpty = !cart || !cart.checkoutUrl || cart.lines.edges.length === 0
  console.log('cart', cart)
  console.log('isEmpty', isEmpty)
  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-lg font-medium text-gray-900">Votre panier</Dialog.Title>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Fermer le panneau</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {isCartLoading ? (
                [...Array(3)].map((_item, i) => (
                  <li key={i} className="flex py-6 animate-pulse">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <div className="w-24 h-24 bg-slate-200" />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <div className="h-4 w-40 bg-slate-200 rounded" />
                          <div className="h-4 w-12 bg-slate-200 rounded" />
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="h-4 w-8 bg-slate-200 rounded" />

                        <div className="flex">
                          <div className="h-4 w-20 bg-slate-200 rounded" />
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : isEmpty ? (
                <div className="flex flex-col items-center">
                  {/* <EmptyCart className="h-60 w-60 text-gray-700" /> */}
                  <ShoppingBagIcon className="h-60 w-60 text-gray-200" />
                  <p className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Votre panier est vide
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-500 text-center max-w-xs">
                    On dirait que vous n&apos;avez pas encore fait votre choix
                  </p>
                  <ButtonLink size="large" href="/produits" className="mt-20">
                    Voir nos produits
                  </ButtonLink>
                </div>
              ) : (
                cart?.lines.edges.map(({ node: line }) => (
                  <li key={line.merchandise.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={line.merchandise.image?.url}
                        alt={line.merchandise.image?.altText || line.merchandise.product.title}
                        width={96}
                        height={96}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={line.merchandise.product.handle}>
                              {' '}
                              {line.merchandise.product.title}{' '}
                            </a>
                          </h3>
                          <p className="ml-4">{price(line.merchandise.price.amount)}</p>
                        </div>
                        {/* TODO: Display weight or variant */}
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qté {line.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-primary hover:text-primary-light"
                            onClick={() => removeProduct(line.id)}
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      {isError && <Alert onHide={reset}>Erreur lors de la suppression du produit</Alert>}
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Sous-Total</p>
          <p>
            {isCartLoading || isRemoveLoading ? (
              <div className="h-4 w-12 bg-slate-200 rounded" />
            ) : (
              price(cart?.cost.subtotalAmount.amount || 0)
            )}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Livraison et taxes calculées lors du paiement.
        </p>
        <div className="mt-6">
          <a
            href={cart?.checkoutUrl || '#'}
            className={clsx(
              isCartLoading || isRemoveLoading || isEmpty
                ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark',
              'flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm'
            )}
          >
            Finaliser ma commande
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            ou{' '}
            <button
              type="button"
              className="font-medium text-primary hover:text-primary-light"
              onClick={onClose}
            >
              Continuer les achats<span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
