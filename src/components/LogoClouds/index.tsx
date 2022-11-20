import Image from 'next/image'

import TitleSection from '@/atomic/atoms/TitleSection'
import ala from '@/public/logos/partners/ala.svg'
import ctht from '@/public/logos/partners/ctht.svg'
import talantana from '@/public/logos/partners/talantana.svg'
import vaoSuzette from '@/public/logos/partners/vao-suzette.svg'

export default function LogoClouds() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <TitleSection center variant="white" className="text-3xl font-bold tracking-tight">
          Nos partenaires
        </TitleSection>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 justify-between mt-4 lg:mt-8">
          <div className="h-44 flex items-center justify-center">
            <Image className="h-36 w-52" src={ala} alt="Logo d'Ala" />
          </div>
          <div className="h-44 flex items-center justify-center">
            <Image className="h-36 w-52" src={ctht} alt="Logo de Ctht" />
          </div>
          <div className="h-44 flex items-center justify-center">
            <Image
              className="h-36 w-52"
              src={talantana}
              alt="Logo de Talantana"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="h-44 flex items-center justify-center">
            <Image className="h-36 w-52" src={vaoSuzette} alt="Logo de Vao Suzette" />
          </div>
        </div>
      </div>
    </div>
  )
}
