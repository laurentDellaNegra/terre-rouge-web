import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import { GET_SHOP_QUERY_KEY, getShop } from '@/lib/getShop'
import { TRUSTPILOT_QUERY_KEY, getTrustpilotReviews } from '@/lib/trustpilot'

// TODO: Get this from shopify
export default function Privacy() {
  return (
    <Layout crumb={[{ title: 'Accueil', route: '/' }, { title: 'Politique de confidentialité' }]}>
      <Head>
        <title>Terre Rouge - Politique de confidentialité</title>
      </Head>
      <main className="my-24 text-gray-600 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        DÉCLARATION DE CONFIDENTIALITÉ
        <br />
        <br />
        ----
        <br />
        <br />
        ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS
        <br />
        <br />
        Lorsque vous effectuez un achat sur notre boutique, dans le cadre de notre processus d’achat
        et de vente, nous recueillons les renseignements personnels que vous nous fournissez, tels
        que votre nom, votre adresse et votre adresse e-mail.
        <br />
        <br />
        Lorsque vous naviguez sur notre boutique, nous recevons également automatiquement l’adresse
        de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d’obtenir plus de
        détails au sujet du navigateur et du système d’exploitation que vous utilisez.
        <br />
        <br />
        Marketing par e-mail (le cas échéant): Avec votre permission, nous pourrions vous envoyer
        des e-mails au sujet de notre boutique, de nouveaux produits et d’autres mises à jour.
        <br />
        <br />
        <br />
        ARTICLE 2 - CONSENTEMENT
        <br />
        <br />
        Comment obtenez-vous mon consentement?
        <br />
        <br />
        Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction,
        vérifier votre carte de crédit, passer une commande, planifier une livraison ou retourner un
        achat, nous présumons que vous consentez à ce que nous recueillions vos renseignements et à
        ce que nous les utilisions à cette fin uniquement.
        <br />
        <br />
        Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison,
        à des fins de marketing par exemple, nous vous demanderons directement votre consentement
        explicite, ou nous vous donnerons la possibilité de refuser.
        <br />
        <br />
        <br />
        Comment puis-je retirer mon consentement?
        <br />
        <br />
        Si après nous avoir donné votre consentement, vous changez d’avis et ne consentez plus à ce
        que nous puissions vous contacter, recueillir vos renseignements ou les divulguer, vous
        pouvez nous en aviser en nous contactant à contact@terre-rouge.shop ou par courrier à: Terre
        Rouge 11 place Georges Hermann, 74800, La Roche-Sur-Foron, France
        <br />
        <br />
        <br />
        ARTICLE 3 – DIVULGATION
        <br />
        <br />
        Nous pouvons divulguer vos renseignements personnels si la loi nous oblige à le faire ou si
        vous violez nos Conditions Générales de Vente et d’Utilisation.
        <br />
        <br />
        <br />
        ARTICLE 4 – SHOPIFY
        <br />
        <br />
        Notre boutique est hébergée sur Shopify Inc. Ils nous fournissent la plate-forme e-commerce
        en ligne qui nous permet de vous vendre nos services et produits.
        <br />
        <br />
        Vos données sont stockées dans le système de stockage de données et les bases de données de
        Shopify, et dans l’application générale de Shopify. Vos données sont conservées sur un
        serveur sécurisé protégé par un pare-feu.
        <br />
        <br />
        <br />
        Paiement:
        <br />
        <br />
        Si vous réalisez votre achat par le biais d’une passerelle de paiement direct, dans ce cas
        Shopify stockera vos renseignements de carte de crédit. Ces renseignements sont chiffrés
        conformément à la norme de sécurité des données établie par l’industrie des cartes de
        paiement (norme PCI-DSS). Les renseignements relatifs à votre transaction d’achat sont
        conservés aussi longtemps que nécessaire pour finaliser votre commande. Une fois votre
        commande finalisée, les renseignements relatifs à la transaction d’achat sont supprimés.
        <br />
        <br />
        Toutes les passerelles de paiement direct respectent la norme PCI-DSS, gérée par le conseil
        des normes de sécurité PCI, qui résulte de l’effort conjoint d’entreprises telles que Visa,
        MasterCard, American Express et Discover.
        <br />
        <br />
        Les exigences de la norme PCI-DSS permettent d’assurer le traitement sécurisé des données de
        cartes de crédit par notre boutique et par ses prestataires de services.
        <br />
        <br />
        Pour plus d’informations, veuillez consulter les Conditions d’Utilisation de Shopify ici ou
        la Politique de Confidentialité ici.
        <br />
        <br />
        <br />A<br />
        Liens
        <br />
        <br />
        Vous pourriez être amené à quitter notre site web en cliquant sur certains liens présents
        sur notre site. Nous n’assumons aucune responsabilité quant aux pratiques de confidentialité
        exercées par ces autres sites et vous recommandons de lire attentivement leurs politiques de
        confidentialité.
        <br />
        <br />
        <br />
        ARTICLE 6 – SÉCURITÉ
        <br />
        <br />
        Pour protéger vos données personnelles, nous prenons des précautions raisonnables et suivons
        les meilleures pratiques de l’industrie pour nous assurer qu’elles ne soient pas perdues,
        détournées, consultées, divulguées, modifiées ou détruites de manière inappropriée.
        <br />
        <br />
        Si vous nous fournissez vos informations de carte de crédit, elles seront chiffrées par le
        biais de l’utilisation du protocole de sécurisation SSL et conservées avec un chiffrement de
        type AES-256. Bien qu’aucune méthode de transmission sur Internet ou de stockage
        électronique ne soit sûre à 100 %, nous suivons toutes les exigences de la norme PCI-DSS et
        mettons en œuvre des normes supplémentaires généralement reconnues par l’industrie.
        <br />
        FICHIERS TÉMOINS (COOKIES)
        <br />
        <br />
        Voici une liste de fichiers témoins que nous utilisons. Nous les avons énumérés ici pour que
        vous ayez la possibilité de choisir si vous souhaitez les autoriser ou non.
        <br />
        <br />
        _session_id, identificateur unique de session, permet à Shopify de stocker les informations
        relatives à votre session (référent, page de renvoi, etc.).
        <br />
        <br />
        _shopify_visit, aucune donnée retenue, persiste pendant 30 minutes depuis la dernière
        visite. Utilisé par le système interne de suivi des statistiques du fournisseur de notre
        site web pour enregistrer le nombre de visites.
        <br />
        <br />
        _shopify_uniq, aucune donnée retenue, expire à minuit (selon l’emplacement du visiteur) le
        jour suivant. Calcule le nombre de visites d’une boutique par client unique.
        <br />
        <br />
        cart, identificateur unique, persiste pendant 2 semaines, stocke l’information relative à
        votre panier d’achat.
        <br />
        <br />
        _secure_session_id, identificateur unique de session
        <br />
        <br />
        storefront_digest, identificateur unique, indéfini si la boutique possède un mot de passe,
        il est utilisé pour savoir si le visiteur actuel a accès.
        <br />
        <br />
        <br />
        ARTICLE 7 – ÂGE DE CONSENTEMENT
        <br />
        <br />
        En utilisant ce site, vous déclarez que vous avez au moins l’âge de la majorité dans votre
        État ou province de résidence, et que vous nous avez donné votre consentement pour permettre
        à toute personne d’âge mineur à votre charge d’utiliser ce site web.
        <br />
        <br />
        <br />
        ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ
        <br />
        <br />
        Nous nous réservons le droit de modifier la présente politique de confidentialité à tout
        moment, donc veuillez s’il vous plait la consulter fréquemment. Les changements et les
        clarifications prendront effet immédiatement après leur publication sur le site web. Si nous
        apportons des changements au contenu de cette politique, nous vous aviserons ici qu’elle a
        été mise à jour, pour que vous sachiez quels renseignements nous recueillons, la manière
        dont nous les utilisons, et dans quelles circonstances nous les divulguons, s’il y a lieu de
        le faire.
        <br />
        <br />
        Si notre boutique fait l’objet d’une acquisition par ou d’une fusion avec une autre
        entreprise, vos renseignements pourraient être transférés aux nouveaux propriétaires pour
        que nous puissions continuer à vous vendre des produits.
        <br />
        <br />
        <br />
        QUESTIONS ET COORDONNÉES
        <br />
        <br />
        Si vous souhaitez: accéder à, corriger, modifier ou supprimer toute information personnelle
        que nous avons à votre sujet, déposer une plainte, ou si vous souhaitez simplement avoir
        plus d’informations, contactez notre agent responsable des normes de confidentialité à
        contact@terre-rouge.shop ou par courrier à Terre Rouge
        <br />
        <br />
        [Re: Agent des Normes de Confidentialité]
        <br />
        <br />
        [11 place Georges Hermann, 74800, La Roche-Sur-Foron, France]
        <br />
        <br />
        ----
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
