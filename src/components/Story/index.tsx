import { Disclosure, Transition } from '@headlessui/react'
import Image from 'next/image'

import P from '@/components/UI/P'
import TitleSection from '@/components/UI/TitleSection'
import picture from '@/public/images/story.webp'

export default function Story() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8"> */}
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:order-2 lg:w-[432px]">
            <TitleSection className="mb-4">Notre histoire</TitleSection>
            <P>
              Notre histoire débute avec l&apos;amour de la cuisine, nous voulons vous faire
              profiter de la richesse culinaire que peut offrir l&apos;île de Madagascar, le
              carrefour entre l&apos;Afrique et l&apos;Asie.
            </P>
            <P>
              Terre Rouge vous donne de multiples choix d&apos;épices et de condiments. Pour
              sublimer la beauté culinaire, l&apos;art de table est mis en avant avec le produit
              phare malagasy: le raphia. Notre raphia est travaillé à la main afin de garantir une
              meilleure qualité.
            </P>{' '}
            <Disclosure>
              {({ open }) => (
                <>
                  {!open && (
                    <Disclosure.Button className="py-2 font-semibold text-primary hover:text-primary-light">
                      Lire la suite
                    </Disclosure.Button>
                  )}
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <P>
                        Faire parvenir ces épices nous amène à un choix du respect de
                        l&apos;environnement, à travers nos emballages parfaitement compostables,
                        biodégradables et bioressources.
                      </P>
                      <P>
                        Nos partenaires partagent les mêmes valeurs que nous, ils mettent en place
                        des contenants en verre, en kraft et en raphia , sans matière plastique.
                      </P>
                      <P>
                        Nous participons également à la reforestation de Madagascar en aidant
                        l&apos;association ALA à restaurer le poumon vert de Madagascar.
                      </P>
                      <P>
                        Nous travaillons avec des entrepreneurs et entreprises malagasy afin de
                        favoriser l&apos;emploi à Madagascar.
                      </P>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-full flex-auto text-center lg:w-1/2">
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
