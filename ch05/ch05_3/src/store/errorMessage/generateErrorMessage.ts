import {Dispatch} from 'redux'
import {setErrorMessage} from './actions'

export const generateErrorMessate =
  (erroMessage: string = 'some error occurred') =>
  (dispatch: Dispatch) => {
    dispatch(setErrorMessage(''))
    try {
      throw new Error(erroMessage)
    } catch (e) {
      if (e instanceof Error) {
        dispatch(setErrorMessage(e.message))
      }
    }
  }
