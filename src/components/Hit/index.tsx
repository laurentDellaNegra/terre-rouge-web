import Image from 'next/image'
import { Highlight } from 'react-instantsearch-hooks-web'

export default function Hit({ hit }: any) {
  return (
    <article>
      <div className="relative h-72 w-72">
        <Image
          src={hit.image}
          alt={hit.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="50vw"
          priority // TODO: set priority only on firsts images
        />
      </div>
      <p>{hit.category}</p>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>${hit.price}</p>
    </article>
  )
}
