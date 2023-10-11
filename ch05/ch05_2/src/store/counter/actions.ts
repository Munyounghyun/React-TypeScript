import type * as T from './types'

export const setCounter = (payload: T.State): T.SetCounterAction => ({
  type: '@counter/setCounter',
  payload
})

export const incrementCounter = () => setCounter(1)
export const decrementCounter = () => setCounter(-1)
