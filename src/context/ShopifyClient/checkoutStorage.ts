const CHECKOUT_STORAGE_KEY = 'checkout_id'

export function removeCheckoutIdFromStorage() {
  localStorage.removeItem(CHECKOUT_STORAGE_KEY)
}

export function getCheckoutIdFromStorage() {
  if (typeof window === 'undefined') return null
  const checkoutIdStr = localStorage.getItem(CHECKOUT_STORAGE_KEY)

  if (!checkoutIdStr) {
    return null
  }
  const { value, expiry } = JSON.parse(checkoutIdStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    removeCheckoutIdFromStorage()
    return null
  }
  return value
}

export function setCheckoutIdFromStorage(id: string) {
  const nextDay = new Date()
  nextDay.setDate(nextDay.getDate() + 1)

  const checkoutId = {
    value: id,
    expiry: nextDay.getTime(),
  }
  localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(checkoutId))
}
