export const scrollToTop = () => {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    window.parent.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } catch (error) {
    console.log(error)
  }
}
