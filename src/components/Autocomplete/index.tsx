import { autocomplete } from '@algolia/autocomplete-js'
import React, { Fragment, createElement, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

export function Autocomplete(props: any) {
  const containerRef: any = useRef(null)
  const panelRootRef: any = useRef(null)
  const rootRef: any = useRef(null)

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root

          panelRootRef.current?.unmount()
          panelRootRef.current = createRoot(root)
        }

        panelRootRef.current.render(children)
      },
      detachedMediaQuery: false,
      classNames: {
        input: 'focus:ring-0',
        form: 'focus-within:ring-2 border-2 border-white rounded-none sm:rounded-md',
        panel: 'mt-0 sm:mt-2 rounded-none sm:rounded-md',
      },
      ...props,
    })

    return () => {
      search.destroy()
    }
  }, [props])

  return <div ref={containerRef} />
}
