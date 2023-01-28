import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

// TODO: Get this from shopify
export default function Usage() {
  return (
    <Layout crumb={[{ title: 'Accueil', route: '/' }, { title: "Conditions d'utilisation" }]}>
      <Head>
        <title>Terre Rouge - Conditions d’utilisation </title>
      </Head>
      <main className="my-24 text-gray-600 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p>
          <span>
            <b>Conditions d’utilisation :</b>
          </span>
        </p>
        <p>
          Ce site (<a href="https://www.anthedesign.fr/">ww</a>w.terre-rouge.shop) est proposé en
          différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort
          d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des
          navigateurs modernes comme Safari, Firefox, Google Chrome, etc…
        </p>
        <p>
          Terre rouge met en œuvre tous les moyens dont elle dispose, pour assurer une information
          fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou
          omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des
          informations auprès de , et signaler toutes modifications du site qu’il jugerait utile.
          n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout
          préjudice direct ou indirect pouvant en découler.
        </p>
        <p>
          <b>Cookies</b>
          <span>&nbsp;</span>: Le site<span>&nbsp;ww</span>w.terre-rouge.shop<span>&nbsp;</span>
          peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques
          et d’affichage. Un cookies est une information déposée sur votre disque dur par le serveur
          du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre
          ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer
          des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans
          l’acceptation de cookies.
        </p>
        <p>
          <b>Liens hypertextes :</b>
          <span>&nbsp;</span>Les sites internet de peuvent offrir des liens vers d’autres sites
          internet ou d’autres ressources disponibles sur Internet. Terre rouge ne dispose d’aucun
          moyen pour contrôler les sites en connexion avec ses sites internet. ne répond pas de la
          disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être
          tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
          contenu de ces sites ou sources externes, et notamment des informations, produits ou
          services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les
          risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se
          conformer à leurs conditions d’utilisation.
        </p>
        <p>
          Les utilisateurs, les abonnés et les visiteurs des sites internet &nbsp;ne peuvent pas
          mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et
          préalable de Terre rouge.
        </p>
        <p>
          Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien
          en direction d’un des sites internet de Terre rouge, il lui appartiendra d’adresser un
          email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.
          Terre rouge se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en
          justifier sa décision.
        </p>
        <p>
          <span>
            <b>Services fournis :</b>
          </span>
        </p>
        <p>
          L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre
          site<span>&nbsp;www.</span>terre-rouge.shop.
        </p>
        <p>
          Terre rouge s’efforce de fournir sur le site www.terre-rouge.shop des informations aussi
          précises que possible. les renseignements figurant sur le site<span>&nbsp;www.</span>
          terre-rouge.shop<span>&nbsp;</span>ne sont pas exhaustifs et les photos non
          contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis
          leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site
          www.terre-rouge.shop
          <b>
            <span>&nbsp;</span>
          </b>
          sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
        </p>
        <p>
          <span>
            <b>Limitation contractuelles sur les données :</b>
          </span>
        </p>
        <p>
          Les informations contenues sur ce site sont aussi précises que possible et le site remis à
          jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou
          des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un
          dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse
          contact@terre-rouge.shop, en décrivant le problème de la manière la plus précise possible
          (page posant problème, type d’ordinateur et de navigateur utilisé, …).
        </p>
        <p>
          Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule
          responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage
          subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives
          au téléchargement.<span>&nbsp;</span>
          <span>
            De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel
            récent, ne contenant pas de virus et avec un navigateur de dernière génération
            mis-à-jour.
          </span>
        </p>
        <p>
          Les liens hypertextes mis en place dans le cadre du présent site internet en direction
          d’autres ressources présentes sur le réseau Internet ne sauraient engager la
          responsabilité de Terre rouge.
        </p>
        <p>
          <span>
            <b>Propriété intellectuelle :</b>
          </span>
        </p>
        <p>
          Tout le contenu du présent site www.terre-rouge.shop, incluant, de façon non limitative,
          les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que
          leur mise en forme sont la propriété exclusive de la société à l’exception des marques,
          logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
        </p>
        <p>
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
          même partielle, de ces différents éléments est strictement interdite sans l’accord exprès
          par écrit de ENT Terre rouge. Cette représentation ou reproduction, par quelque procédé
          que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du
          Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une
          contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre,
          les propriétaires des Contenus copiés pourraient intenter une action en justice à votre
          encontre.
        </p>
        <p>
          <span>
            <b>Déclaration à la CNIL :</b>
          </span>
        </p>
        <p>
          Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004
          relative à la protection des personnes physiques à l’égard des traitements de données à
          caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site a
          fait l’objet d’une déclaration 1656629 auprès de la Commission nationale de l’informatique
          et des libertés (<a href="http://www.cnil.fr/">www.cnil.fr</a>).
        </p>
        <p>
          <span>
            <b>Litiges :</b>
          </span>
        </p>
        <p>
          Les présentes conditions du site<span>&nbsp;www.</span>terre-rouge.shop<span>&nbsp;</span>
          sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître
          de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des
          tribunaux dont dépend le siège social de la société. La langue de référence, pour le
          règlement de contentieux éventuels, est le français.
        </p>
        <p>
          <span>
            <b>Données personnelles :</b>
          </span>
        </p>
        <p>
          De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles
          lorsque vous visitez notre site Internet<span>&nbsp;www.</span>terre-rouge.shop.
        </p>
        <p>
          Cependant, ce principe comporte certaines exceptions. En effet, pour certains services
          proposés par notre site, vous pouvez être amenés à nous communiquer certaines données
          telles que : votre nom, votre fonction, le nom de votre société, votre adresse
          électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le
          formulaire qui vous est proposé en ligne, dans la rubrique «<span>&nbsp;</span>
          <a href="https://www.anthedesign.fr/contact/">contact</a>
          <span>&nbsp;</span>».
        </p>
        <p>
          Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas,
          vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des
          renseignements sur notre société, ou de recevoir les lettres d’information.
        </p>
        <p>
          Enfin, nous pouvons collecter de manière automatique certaines informations vous
          concernant lors d’une simple navigation sur notre site Internet, notamment : des
          informations concernant l’utilisation de notre site, comme les zones que vous visitez et
          les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos
          temps d’accès.
        </p>
        <p>
          De telles informations sont utilisées exclusivement à des fins de statistiques internes,
          de manière à améliorer la qualité des services qui vous sont proposés. Les bases de
          données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la
          directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
        </p>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([GET_SHOP_QUERY_KEY], getShop)
  await queryClient.prefetchQuery([TRUSTPILOT_QUERY_KEY], getTrustpilotReviews)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
