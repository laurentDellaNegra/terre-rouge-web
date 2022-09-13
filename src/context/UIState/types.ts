export type Action = {
  type: 'TOGGLE_SEARCH_PALETTE'
}
export type Dispatch = (action: Action) => void
export interface State {
  openSearchPalette: boolean
}
