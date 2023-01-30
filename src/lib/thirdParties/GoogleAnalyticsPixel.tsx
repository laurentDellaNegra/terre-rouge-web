import Script from 'next/script'

import * as gtag from '@/lib/thirdParties/gtag'

export default function GoogleAnalyticsPixel() {
  return (
    <>
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  )
}
