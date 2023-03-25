export type ToggleSearchPaletteAction = {
  type: 'TOGGLE_SEARCH_PALETTE'
  value?: boolean
}
export type ToggleCartPanelAction = {
  type: 'TOGGLE_CART_PANEL'
}
export type Action = ToggleSearchPaletteAction | ToggleCartPanelAction
export type Dispatch = (action: Action) => void
export interface State {
  openCartPanel: boolean
  openSearchPalette: boolean
}
