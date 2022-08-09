import Image from 'next/future/image'

import TitleSection from '@/atomic/atoms/TitleSection'
import picture from '@/public/images/story.webp'

export default function Story() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8"> */}
        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-32 mb-8 sm:mb-16 lg:mb-28">
          <div className="xl:w-[432px] xl:order-2">
            <TitleSection className="mb-4">Notre histoire</TitleSection>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five.
            </p>
          </div>
          <div className="sm:w-1/2 flex-auto text-center">
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
