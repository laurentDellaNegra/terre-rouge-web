import { useMemo, useReducer } from 'react'

import UIStateContext from './UIStateContext'
import { Action, State } from './types'

function UIStateReducer(state: State, action: Action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_PALETTE': {
      return { ...state, openSearchPalette: !state.openSearchPalette }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
interface Props {
  children: React.ReactNode
}

export default function UIStateProvider(props: Props) {
  const { children } = props
  const initialState: State = {
    openSearchPalette: false,
  }
  const [state, dispatch] = useReducer(UIStateReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>
}
