import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

export default function useCmdK(callback: () => void) {
  // implement the callback ref pattern
  const callbackRef = useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  })

  // handle what happens on key press
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // check if one of the key is part of the ones we want
    if (event.metaKey && event.key === 'k') {
      callbackRef.current()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])
}
