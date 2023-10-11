import type * as T from './types'

export const setLoading = (payload: T.State): T.setLoadingAction => ({
  type: '@loading/setLoadingAction',
  payload
})
