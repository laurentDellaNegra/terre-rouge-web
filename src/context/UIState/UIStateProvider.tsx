import { useMemo, useReducer } from 'react'

import UIStateContext from './UIStateContext'
import UIStateReducer from './UIStateReducer'
import { State } from './types'

interface Props {
  children: React.ReactNode
}

export default function UIStateProvider(props: Props) {
  const { children } = props
  const initialState: State = {
    openSearchPalette: false,
    openCartPanel: false,
  }
  const [state, dispatch] = useReducer(UIStateReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>
}
