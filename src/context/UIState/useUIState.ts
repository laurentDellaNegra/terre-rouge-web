import { useCallback, useContext, useEffect, useRef } from 'react'

import useWindowSize from '@/hooks/useWindowSize'
import { getBreakpoint } from '@/lib/tailwindConfig'

import UIStateContext from './UIStateContext'

function useUIState() {
  const context = useContext(UIStateContext)
  if (context === undefined) {
    throw new Error('useUIState must be used within a TableProvider')
  }
  const { state, dispatch } = context
  const { openSearchPalette } = state

  const toggleSearch = useCallback(
    (): void => dispatch({ type: 'TOGGLE_SEARCH_PALETTE' }),
    [dispatch]
  )

  // Close SearchPalette on sm screen
  const { width } = useWindowSize()
  useEffect(() => {
    if (width < getBreakpoint('lg')) {
      if (openSearchPalette) toggleSearch()
    }
  }, [openSearchPalette, toggleSearch, width])

  return { state, dispatch, openSearchPalette, toggleSearch }
}

export default useUIState
