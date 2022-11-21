export default function debounce<T>(
  func: (...args: T[]) => unknown,
  delay = 200,
  { leading }: any = {}
) {
  let timerId: number | NodeJS.Timeout

  return (...args: T[]) => {
    if (!timerId && leading) {
      func(...args)
    }
    clearTimeout(timerId as number)

    timerId = setTimeout(() => func(...args), delay)
  }
}
