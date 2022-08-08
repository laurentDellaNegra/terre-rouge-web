import Link from 'next/link'

import ButtonLink from '@/atomic/atoms/ButtonLink'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="h-screen">
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-primary sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page non trouvée
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Veuillez vérifier l&apos;URL dans la barre d&apos;adresse et réessayer
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <ButtonLink href="/">Retour a l&apos;accueil</ButtonLink>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
