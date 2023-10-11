import type {Action} from 'redux'

export type State = string

export type setErrorMessageAction = Action<'@errorMessage/setErrorMessage'> & {
  payload: State
}

export type Actions = setErrorMessageAction
