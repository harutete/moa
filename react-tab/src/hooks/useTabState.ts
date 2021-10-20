import { useState, useCallback } from 'react'

export const useTabState = (initialState: string) => {
  const [state, setState] = useState(initialState)
  const handleSetState = useCallback((selectedValue: string) => {
    setState(selectedValue)
  }, [])

  return {
    state,
    handleSetState
  }
}