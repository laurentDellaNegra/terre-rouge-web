import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import artTableImg from '@/public/images/art-table.avif'
import condimentsImg from '@/public/images/condiments.avif'
import spiciesImg from '@/public/images/spices.avif'

const collections = [
  {
    name: 'Épices',
    href: '/epices',
    imageSrc: spiciesImg,
    imageAlt: 'Cuillère joliement disposée contenant du poivre noir',
  },
  {
    name: 'Condiments',
    href: '/condiments',
    imageSrc: condimentsImg,
    imageAlt: 'Ensemble de pots de confitures joliement disposés',
  },
  {
    name: 'Arts de table',
    href: '/arts-de-table',
    imageSrc: artTableImg,
    imageAlt: "Ensemble d'assietes joliement disposées",
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
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-8 sm:px-6 lg:gap-x-16 lg:px-8">
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
                    placeholder="blur"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">
                    Continuez vers ces produits
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    <Link href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </Link>
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
