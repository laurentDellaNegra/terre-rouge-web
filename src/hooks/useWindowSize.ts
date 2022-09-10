import { useEffect, useState } from 'react'

function getWindowSize() {
  if (typeof window === 'undefined') return { innerWidth: 0, innerHeight: 0 }
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return {
    width: windowSize.innerWidth,
    height: windowSize.innerHeight,
  }
}
