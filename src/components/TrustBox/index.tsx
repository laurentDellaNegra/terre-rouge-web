import Script from 'next/script'
import React from 'react'

export default function TrustBox() {
  // Créez une référence qui renvoie à l'élément <div> qui va représenter la TrustBox
  const ref = React.useRef(null)
  React.useEffect(() => {
    // Si window.Trustpilot est disponible, cela signifie que nous devons charger la TrustBox depuis notre référence.
    // Si ce n'est pas le cas, cela signifie que le script que vous avez collé dans <head /> n'est pas encore chargé.
    // Quand il sera chargé, la TrustBox sera automatiquement affichée.
    if ((window as any).Trustpilot) {
      ;(window as any).Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])
  return (
    <>
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <div
        suppressHydrationWarning // TODO: TMP solution
        ref={ref} // Nous avons besoin d'une référence à cet élément pour charger la TrustBox dans l'effet (effect).
        className="trustpilot-widget bg-primary-light p-1 text-center" // Cette classe a été renommée « className ».
        data-locale="fr-FR"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="5fbae7dd7f46530001caa378"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
      >
        Chargement des avis Trustpilot...
      </div>
    </>
  )
}
