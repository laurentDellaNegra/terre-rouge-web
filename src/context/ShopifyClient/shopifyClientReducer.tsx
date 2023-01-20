import { Action, State } from './types'

export default function shopifyClientReducer(state: State, action: Action) {
  switch (action.type) {
    case 'DELETE_CHECKOUT_ID': {
      return { ...state, checkoutId: null }
    }
    case 'SET_CHECKOUT_ID': {
      return { ...state, checkoutId: action.payload.id }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
