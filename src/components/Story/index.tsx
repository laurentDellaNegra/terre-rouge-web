import Image from 'next/future/image'

import P from '@/atomic/atoms/P'
import TitleSection from '@/atomic/atoms/TitleSection'
import picture from '@/public/images/story.webp'

export default function Story() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8"> */}
        <div className="flex flex-col items-center gap-16 xl:flex-row">
          <div className="xl:order-2 xl:w-[432px]">
            <TitleSection className="mb-4">Notre histoire</TitleSection>
            <P>
              Derrière Terre rouge se cache une jeune auto-entrepreneuse malgache. Passionnée de
              voyage et de cuisine, elle a décidé de commercialiser et de promouvoir des épices
              provennant de son île natale Madagascar. Pour elle les épices sont une invitation à
              une évasion culinaire. Terre rouge récolte mais sème également.
              <br />
              En effet, elle aide l&apos;association ALA à restaurer le poumon vert de l&apos;île
              rouge.
            </P>
          </div>
          <div className="w-full flex-auto text-center xl:w-1/2">
            <Image
              // className="block h-96 w-auto m-auto"
              className="aspect-square w-full"
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
