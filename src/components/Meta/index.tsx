import Head from 'next/head'

//TODO: Add more variables
const HOME_OG_IMAGE_URL = process.env.NEXT_PUBLIC_HOME_OG_IMAGE_URL || ''
const STORE_NAME = process.env.NEXT_PUBLIC_STORE_NAME || ''

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`${STORE_NAME} - Une selection de condiments et d'épices fraîchement moulues, de la vanille bourbon de Madagascar, séchée de façon artisanale.`}
      />
      {/* https://ogp.me/ */}
      {/* https://developers.facebook.com/docs/sharing/best-practices */}
      {/* https://developers.facebook.com/tools/debug/ */}
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Logo avec le texte terre rouge" />
      <meta property="og:url" content="https://terre-rouge.shop/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={STORE_NAME} />
      <meta
        property="og:description"
        content="Vente de vanilles, de condiments et d'épices de Madagascar"
      />
    </Head>
  )
}
