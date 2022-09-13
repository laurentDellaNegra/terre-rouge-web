import { createContext } from 'react'

import { Dispatch, State } from './types'

const UIStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)
UIStateContext.displayName = 'UIStateContext'
export default UIStateContext
