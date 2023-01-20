import { Action, State } from './types'

export default function UIStateReducer(state: State, action: Action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_PALETTE': {
      return { ...state, openSearchPalette: !state.openSearchPalette }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
