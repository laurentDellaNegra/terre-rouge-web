import produce from 'immer'

import { Action, State } from './types'

export default function UIStateReducer(state: State, action: Action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_PALETTE': {
      return produce(state, (draft) => {
        draft.openSearchPalette = !state.openSearchPalette
      })
    }
    case 'TOGGLE_CART_PANEL': {
      return produce(state, (draft) => {
        draft.openCartPanel = !state.openCartPanel
      })
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
