import { useCallback, useEffect } from 'react'

export default function useCmdK(callback: () => void) {
  // handle what happens on key press
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // check if one of the key is part of the ones we want
    if (event.metaKey && event.key === 'k') {
      callback()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])
}
