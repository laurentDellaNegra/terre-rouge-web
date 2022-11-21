export const scrollToTop = (mode: 'smooth' | 'auto' = 'auto') => {
  try {
    window.scrollTo({
      top: 0,
      behavior: mode,
    })
    window.parent.scrollTo({
      top: 0,
      behavior: mode,
    })
  } catch (error) {
    // console.log(error)
  }
}
