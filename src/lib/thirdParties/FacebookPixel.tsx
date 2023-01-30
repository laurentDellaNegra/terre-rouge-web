import Image from 'next/image'
import Script from 'next/script'

export default function FacebookPixel() {
  return (
    <>
      <Script id="partytown-config">
        {`
        partytown = {
          debug: true,
        };
      `}
      </Script>
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '905821310443956');
        fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <Image
          unoptimized
          alt="facebook pixel"
          height="1"
          width="1"
          className="hidden"
          src="https://www.facebook.com/tr?id=905821310443956&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}
