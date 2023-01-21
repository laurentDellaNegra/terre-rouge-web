const CART_STORAGE_KEY = 'cart_id'

export function removeCartIdFromStorage() {
  localStorage.removeItem(CART_STORAGE_KEY)
}

export function getCartIdFromStorage() {
  if (typeof window === 'undefined') return null
  const cartIdStr = localStorage.getItem(CART_STORAGE_KEY)

  if (!cartIdStr) {
    return null
  }
  const { value, expiry } = JSON.parse(cartIdStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    removeCartIdFromStorage()
    return null
  }
  return value
}

export function setCartIdFromStorage(id: string) {
  const nextDay = new Date()
  nextDay.setDate(nextDay.getDate() + 1)

  const cartId = {
    value: id,
    expiry: nextDay.getTime(),
  }
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartId))
}
