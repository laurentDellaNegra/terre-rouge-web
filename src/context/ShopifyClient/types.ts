import type { Client } from 'shopify-buy'

export type SetCheckoutIdAction = {
  type: 'SET_CHECKOUT_ID'
  payload: { id: string }
}
export type DeleteCheckoutIdAction = {
  type: 'DELETE_CHECKOUT_ID'
}

export type Action = SetCheckoutIdAction | DeleteCheckoutIdAction
export type Dispatch = (action: Action) => void

export interface State {
  client: Client
  checkoutId: string | null
}
