import { Action, State } from './types'

export default function shopifyClientReducer(state: State, action: Action) {
  switch (action.type) {
    case 'DELETE_CART_ID': {
      return { ...state, cartId: null }
    }
    case 'SET_CART_ID': {
      return { ...state, cartId: action.payload.id }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
