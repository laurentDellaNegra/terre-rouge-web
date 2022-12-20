import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { GetProductQuery, Product, ProductVariant } from '@/types/gql/graphql'

import { PRODUCT_COLORS } from './colors'

interface Props {
  product: GetProductQuery['product']
  variant: any // TODO
  setVariant: (variant: any) => void
}

export default function VariantColors(props: Props) {
  const { product, variant, setVariant } = props
  return (
    <RadioGroup value={variant} onChange={setVariant} className="mt-4">
      <RadioGroup.Label className="sr-only">Choisissez une variante</RadioGroup.Label>
      <div className="flex items-center space-x-3">
        {product?.variants.edges.map(({ node }) => (
          <RadioGroup.Option
            key={node.title}
            value={node}
            className={({ active, checked }) =>
              clsx(
                PRODUCT_COLORS[node.title].selectedClass,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            <RadioGroup.Label className="sr-only" as="span">
              {node.title}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={clsx(
                PRODUCT_COLORS[node.title].class,
                'h-8 w-8 border border-black border-opacity-10 rounded-full'
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
