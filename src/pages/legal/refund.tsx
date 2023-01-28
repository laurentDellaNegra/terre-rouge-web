import Head from 'next/head'

import Layout from '@/components/Layout'

// TODO: Get this from shopify
export default function Refund() {
  return (
    <Layout crumb={[{ title: 'Accueil', route: '/' }, { title: 'Politique de remboursement' }]}>
      <Head>
        <title>Terre Rouge - Politique de remboursement</title>
      </Head>
      <main className="my-24 text-gray-600 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        RETOURS
        <br />
        <br />
        ----
        <br />
        <br />
        Notre politique dure 30 jours. Si 30 jours se sont écoulés depuis votre achat, nous ne
        pouvons malheureusement pas vous offrir un remboursement ou un échange.
        <br />
        <br />
        Pour pouvoir bénéficier d’un retour, votre article doit être inutilisé et dans le même état
        où vous l’avez reçu. Il doit être également dans l’emballage d’origine.
        <br />
        <br />
        Pour effectuer un retour, vous devez nous présenter un reçu ou une preuve d’achat.
        <br />
        <br />* Tout article qui n’est pas dans son état d’origine, qui est endommagé ou qui
        présente certaines pièces manquantes pour des raisons qui ne sont pas dues à une erreur de
        notre part.
        <br />
        <br />
        <br />
        Remboursements (le cas échéant)
        <br />
        Une fois que nous aurons reçu et inspecté l’article retourné, nous vous enverrons un e-mail
        pour vous confirmer que nous l’avons bien reçu. Nous vous informerons également de notre
        décision quant à l’approbation ou au rejet de votre demande de remboursement.
        <br />
        Si votre demande est approuvée, alors votre remboursement sera traité, et un crédit sera
        automatiquement appliqué à votre carte de crédit ou à votre méthode originale de paiement,
        dans un délai d’un certain nombre de jours.
        <br />
        <br />
        Remboursements en retard ou manquants (le cas échéant)
        <br />
        Si vous n’avez pas encore reçu votre remboursement, veuillez d’abord consulter votre compte
        bancaire à nouveau.
        <br />
        Ensuite, contactez l’entité émettrice de votre carte de crédit, car il pourrait y avoir un
        délai avant que votre remboursement ne soit officiellement affiché.
        <br />
        Ensuite, contactez votre banque. Il y a souvent un délai de traitement nécessaire avant
        qu’un remboursement ne soit affiché.
        <br />
        Si après avoir effectué toutes ces étapes, vous n’avez toujours pas reçu votre
        remboursement, veuillez s’il vous plait nous contacter à contact@terre-rouge.shop .<br />
        <br />
        Articles soldés (le cas échéant)
        <br />
        Seuls les articles à prix courant peuvent être remboursés. Malheureusement, les articles
        soldés ne sont pas remboursables.
        <br />
        <br />
        Échanges (le cas échéant)
        <br />
        Nous remplaçons un article seulement s’il est défectueux ou endommagé. Si dans ce cas vous
        souhaitez l’échanger contre le même article, envoyez-nous un e-mail à
        contact@terre-rouge.shop et envoyez-nous votre article à: 11 place Georges Hermann, 74800,
        La Roche-Sur-Foron, France.
        <br />
        <br />
        Cadeaux
        <br />
        Si l’article retourné était identifié comme un cadeau lors de l’achat et s’il vous a été
        envoyé directement, vous recevrez un crédit-cadeau d’une valeur égale à celle de votre
        retour.&nbsp;
        <br />
        <br />
        Expédition
        <br />
        Pour retourner un produit, vous devez l’envoyer par la poste à: 11 place Georges Hermann,
        74800, La Roche-Sur-Foron, France.
        <br />
        <br />
        Il vous incombera de payer vos propres frais d’expédition pour retourner votre article. Les
        coûts d’expédition ne sont pas remboursables. Si vous recevez un remboursement, les frais de
        retour seront déduits de celui-ci.
        <br />
        <br />
        En fonction de l’endroit où vous vivez, le délai nécessaire pour recevoir votre produit
        échangé peut varier.
        <br />
        <br />
        Si vous expédiez un article d’une valeur supérieure à 75€, vous devriez envisager d’utiliser
        un service de livraison qui vous permet de suivre l’envoi ou de souscrire à une assurance de
        livraison. Nous ne garantissons pas que nous recevrons l’article que vous nous retournez.
      </main>
    </Layout>
  )
}
