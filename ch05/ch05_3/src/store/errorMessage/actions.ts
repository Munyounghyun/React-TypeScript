import type * as T from './types'

export const setErrorMessage = (payload: T.State): T.setErrorMessageAction => ({
  type: '@errorMessage/setErrorMessage',
  payload
})
