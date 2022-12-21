import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { GetProductQuery } from '@/types/gql/graphql'

interface Props {
  product: GetProductQuery['product']
  variant: any // TODO
  setVariant: (variant: any) => void
}

export default function VariantBoxes(props: Props) {
  const { product, setVariant, variant } = props
  return (
    <RadioGroup value={variant} onChange={setVariant} className="mt-4">
      <RadioGroup.Label className="sr-only">Choisissez une variante</RadioGroup.Label>
      <div className="flex gap-3">
        {product?.variants.edges.map(({ node }) => (
          <RadioGroup.Option
            key={node.id}
            value={node}
            disabled={!node.availableForSale}
            className={({ active }) =>
              clsx(
                node.availableForSale
                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                active ? 'ring-2 ring-primary' : '',
                'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="span">{node.title}</RadioGroup.Label>
                {node.availableForSale ? (
                  <span
                    className={clsx(
                      active ? 'border' : 'border-2',
                      checked ? 'border-primary' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-md'
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
