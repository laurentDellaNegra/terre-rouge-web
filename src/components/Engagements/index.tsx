import {
  BoltIcon,
  HandRaisedIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
} from '@heroicons/react/20/solid'
import { ChartBarSquareIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

import TitleSection from '@/atomic/atoms/TitleSection'
import imgAlaCnc from '@/public/engagements/ala-cnc.jpeg'
import imgAlaLovain from '@/public/engagements/ala-lovain.jpeg'
import imgAlaQuote from '@/public/engagements/ala-quote.jpeg'
import imgBiodegradable from '@/public/engagements/biodegradable.jpg'

const features = [
  {
    name: 'Protection',
    description:
      'Préserver et restaurer les écosystèmes terrestres en veillant à les exploiter de façon durable.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Alimentaire',
    description:
      "Assurer la sécurité alimentaire, améliorer la nutrition et promouvoir l'agriculture durable.",
    icon: ShoppingCartIcon,
  },
  {
    name: 'Croissance',
    description:
      'Promouvoir une croissance économique soutenue, partagée, et durable, le plein emploi productif et un travail décent pour tous.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Enrayer',
    description:
      'Lutter contre la désertification, enrayer et inverser le processus de dégradation des sols.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Eau',
    description: 'Gérer durablement les ressources en eau.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: 'Comsommation',
    description: 'Etablir des modes de consommation et productions durables.',
    icon: BoltIcon,
  },
]

export default function Engagements() {
  return (
    <div className="bg-white">
      {/* Intro */}
      <div className="mx-auto py-14 sm:py-28 lg:py-40 max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Avec ALA redonnons à</span>
            <span className="block text-primary">Madagascar son poumon vert</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-gray-500 sm:text-lg md:mt-8 md:max-w-3xl md:text-xl">
            L&apos;association Ala travaille main dans la main avec les{' '}
            <strong>communautés locales </strong>
            malgaches afin d&apos;améliorer leur sécurité alimentaire et économique tout en faisant
            la promotion de <strong>l&apos;agroécologie</strong>. Elle a pour objet également
            d&apos;agir en faveur de la préservation de l&apos;environnement à Madagascar.
          </p>
        </div>
      </div>

      {/* QUOTE */}
      <div className="sm:my-20 my-16 lg:my-32 bg-gradient-to-r from-teal-500 to-primary lg:relative lg:z-10">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Image
                  className="object-cover lg:h-full lg:w-full"
                  src={imgAlaQuote}
                  alt="Malgaches faisant de la permaculture"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 pb-12 lg:pb-0 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Madagascar est un pays vulnérable et l&apos;association Ala a pour but
                    d&apos;accompagner la mise en place de solutions intelligentes pour faire face à
                    ces problèmes.
                  </p>
                </div>
                <footer className="my-6">
                  <p className="text-base font-medium text-white">Elliot Rantriamandrato</p>
                  <p className="text-base font-medium text-cyan-100">
                    Président de l&apos;association
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative pt-10 pb-7 sm:pt-20 sm:pb-14 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <TitleSection center>Les objectifs d&apos;Ala</TitleSection>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-primary p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-50 py-14 sm:py-28 lg:py-56">
        <div className="relative">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <TitleSection center>Où vont les 5% de vos achats?</TitleSection>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Terre rouge aide l&apos;association malgache Ala pour ces deux projets. Lorsque vous
                achetez des épices, 5% du prix d&apos;achat aide à développer et concrétiser ces
                projets.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  Projet <span className="text-primary">LOVAIN-JAFY</span>
                </h3>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    LOVAIN-JAFY représente la revalorisation des techniques traditionnelles malagasy
                    et l&apos;introduction de l&apos;agroécologie en faveur de la production des
                    épices malagasy sur la commune d&apos;Ambohimanga.
                  </p>
                  <p className="text-md font-semibold">Les activités sont:</p>
                  <ul className="list-disc ml-4 text-base leading-7">
                    <li>Aménagement de parcelles en diguettes en demi lune et plates bandes.</li>
                    <li>Mises en place de systèmes de rétention des eaux de pluie.</li>
                    <li>
                      Transmission de techniques et pratiques pour régénérer et protéger les sols.
                    </li>
                    <li>Reboisement avec des espèces aromatiques et fruitières.</li>
                    <li>Plantation des épices selon les principes de la permaculture.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-primary-extra-light lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <Image
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={imgAlaLovain}
                  alt="Malgache creusant le sol"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative my-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-primary-extra-light lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-[600px] pb-10 shadow-xl">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={imgAlaCnc}
                    alt="Malgache creusant le sol"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  Reboisement et gestion{' '}
                  <span className="text-primary">d&apos;un domaine forestier</span>
                </h3>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Il s&apos;agit de mettre en place et d&apos;accompagner une association locale
                    sur la mise en place d&apos;une plantation agro-forestière et d&apos;un système
                    de canaux d&apos;irrigation afin de valoriser 10 hectares dans le district
                    d&apos;Ambohidratrimo. Avec la participation des communautés locales
                    d&apos;Ambohimanjaka.
                  </p>
                  <p className="text-md font-semibold">TETIKASA ALA met en oeuvre:</p>
                  <ul className="list-disc ml-4 text-base leading-7">
                    <li>Des études de viabilité de projet de plantation agroforestière.</li>
                    <li>
                      Des formations et sensibilisations des communautés locales aux techniques
                      d&apos;agroécologies.
                    </li>
                    <li>Des chantiers de reboisement sur 2,5 hectares.</li>
                    <li>
                      Des systèmes d&apos;irrigation et d&apos;adduction d&apos;eau pour les
                      habitants de la commune.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Emballages */}
      <div className="lg:relative my-14 sm:my-28 lg:my-56">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-center lg:text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Nos emballages</span>{' '}
              <span className="block text-primary xl:inline">Terre Rouge</span>
            </h1>
            <p className="mx-auto max-w-prose my-3 text-base text-gray-500 sm:text-lg md:my-10">
              Nos produits sont conditionnés dans des emballages{' '}
              <span className="font-bold">100%</span> compostables en foyer et biodégradables. Ils
              sont certifiés selon la norme européenne{' '}
              <a
                className="text-primary underline decoration-double font-bold"
                href="https://docs.european-bioplastics.org/publications/bp/EUBP_BP_En_13432.pdf"
              >
                EN 13432
              </a>
              .
              <br />
              <br />
              La fermeture à glissière est fabriquée en biomatériaux synthétiques (
              <span className="font-bold">PLA</span>: d&apos;amidons de maïs ou de betteraves et au
              bilan carbone neutre).
            </p>
            <div className="mx-auto max-w-prose rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    Vous pouvez jeter les emballages avec les déchets verts ou vos composts.
                  </p>
                </div>
              </div>
            </div>
            <p className="mx-auto max-w-prose my-3 text-base text-gray-500 sm:text-lg md:my-10">
              Les produits de nos partenaires sont en verre ou en papier Kraft (95% sans matière
              plastique).
            </p>
          </div>
        </div>
        <div className="relative  h-64 w-full sm:h-72 md:h-96 lg:rounded-l-3xl shadow-xl lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute lg:rounded-l-3xl inset-0 h-full w-full object-cover"
            src={imgBiodegradable}
            alt="Emballage biodegradable"
          />
        </div>
      </div>
    </div>
  )
}
