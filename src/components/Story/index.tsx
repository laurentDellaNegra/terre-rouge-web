import Image from 'next/future/image'

import TitleSection from '@/atomic/atoms/TitleSection'
import picture from '@/public/images/story.webp'

export default function Story() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8"> */}
        <div className="flex flex-col xl:flex-row items-center gap-16">
          <div className="xl:w-[432px] xl:order-2">
            <TitleSection className="mb-4">Notre histoire</TitleSection>
            <p className="text-gray-500">
              Derrière Terre rouge se cache une jeune auto-entrepreneuse malgache. Passionnée de
              voyage et de cuisine, elle a décidé de commercialiser et de promouvoir des épices
              provennant de son île natale Madagascar. Pour elle les épices sont une invitation à
              une évasion culinaire. Terre rouge récolte mais sème également.
              <br />
              En effet, elle aide l&apos;association ALA à restaurer le poumon vert de l&apos;île
              rouge.
            </p>
          </div>
          <div className="w-full xl:w-1/2 flex-auto text-center">
            <Image
              // className="block h-96 w-auto m-auto"
              className="w-full aspect-square"
              src={picture}
              placeholder="blur"
              alt="photos d'épices"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
