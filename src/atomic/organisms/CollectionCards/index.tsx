import clsx from 'clsx'
import Image from 'next/image'

import artTableImg from '@/public/images/art-table.jpeg'
import clothesImg from '@/public/images/clothes.jpeg'
import spiciesImg from '@/public/images/spicies.jpeg'

const collections = [
  {
    name: 'Épices',
    href: '#',
    imageSrc: spiciesImg,
    imageAlt: 'Cuillères joliement disposées contenant des épices',
  },
  {
    name: 'Art de la table',
    href: '#',
    imageSrc: artTableImg,
    imageAlt: 'Cuillères joliement disposées contenant des épices',
  },
  {
    name: 'Vêtements',
    href: '#',
    imageSrc: clothesImg,
    imageAlt: 'Cuillères joliement disposées contenant des épices',
  },
]

interface CollectionCardsProps {
  className?: string
}

export default function CollectionCards(props: CollectionCardsProps) {
  const { className } = props
  return (
    <section aria-labelledby="collection-heading" className={clsx('relative', className)}>
      <h2 id="collection-heading" className="sr-only">
        Collections
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
        {collections.map((collection) => (
          <div
            key={collection.name}
            className="aspect-square group relative h-96  rounded-lg bg-white shadow-xl sm:aspect-[4/5] sm:h-auto"
          >
            <div>
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <Image
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">
                    Shop the collection
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
