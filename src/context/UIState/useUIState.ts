import { useContext, useEffect, useRef } from 'react'

import UIStateContext from './UIStateContext'

function useUIState() {
  const context = useContext(UIStateContext)
  if (context === undefined) {
    throw new Error('useUIState must be used within a TableProvider')
  }
  const { state, dispatch } = context
  const { openSearchPalette } = state

  const toggleSearch = (): void => dispatch({ type: 'TOGGLE_SEARCH_PALETTE' })

  return { state, dispatch, openSearchPalette, toggleSearch }
}

export default useUIState
