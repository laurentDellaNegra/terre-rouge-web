export type SetCartIdAction = {
  type: 'SET_CART_ID'
  payload: { id: string }
}
export type DeleteCartIdAction = {
  type: 'DELETE_CART_ID'
}

export type Action = SetCartIdAction | DeleteCartIdAction
export type Dispatch = (action: Action) => void

export interface State {
  cartId: string | null
}
