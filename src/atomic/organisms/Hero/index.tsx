import Image from 'next/image'

import ButtonLink from '@/atomic/atoms/ButtonLink'
import SubTitle from '@/atomic/atoms/Subtitle'
import Title from '@/atomic/atoms/Title'
import CollectionCards from '@/atomic/organisms/CollectionCards'
import hero from '@/public/images/hero.png'

export default function Hero() {
  return (
    <div className="relative mb-24">
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={hero}
              alt="Hand picking vanilla bean"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-30" />
        </div>
        <div className="h-48 w-full bg-white md:h-56 lg:h-64" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={hero}
                alt="Hand picking vanilla bean"
                placeholder="blur"
                priority
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-30" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-32 text-white">
          <Title>Bienvenue ! Tongasoa !</Title>
          <SubTitle className="mt-4">
            Terre rouge propose des épices de Madagascar. Riche de sa biodiversité, nous vous
            proposons les meilleures épices que l&apos;île puisse offrir
          </SubTitle>
          <ButtonLink size="large" href="/produits" className="mt-8 sm:mt-6">
            Voir nos produits
          </ButtonLink>
        </div>
      </div>

      <CollectionCards className="-mt-96 sm:mt-0" />
    </div>
  )
}
