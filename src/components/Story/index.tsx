import Image from 'next/future/image'

import P from '@/atomic/atoms/P'
import TitleSection from '@/atomic/atoms/TitleSection'
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
              Terre rouge vous donne de multiples choix d&apos;épices et de condiments. Pour
              sublimer la beauté culinaire, l&apos;art de table est mis en avant avec le produit
              phare malagasy: le raphia. Notre raphia est travaillé à la main afin de garantir une
              meilleure qualité.
            </P>{' '}
            <P>
              Faire parvenir ces épices nous amène à un choix du respect de l&apos;environnement, à
              travers nos emballages parfaitement compostables, biodégradables et bioressources.
            </P>
            <P>
              Nos partenaires partagent les mêmes valeurs que nous, ils mettent en place des
              contenants en verre, en kraft et en raphia , sans matière plastique.
            </P>
            <P>
              Nous participons également à la reforestation de Madagascar en aidant
              l&apos;association ALA à restaurer le poumon vert de Madagascar.
            </P>
            <P>
              Nous travaillons avec des entrepreneurs et entreprises malagasy afin de favoriser
              l&apos;emploi à Madagascar.
            </P>
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
