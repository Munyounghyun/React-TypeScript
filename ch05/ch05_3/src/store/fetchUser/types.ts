import type {Action} from 'redux'
import * as D from '../../data'

//유저 타입
export type State = D.IRandomUser
export type setUserAction = Action<'@remoteUser/setUser'> & {payload: State}
export type ChangeEmailAction = Action<'@remoteUser/changeEmail'> & {payload: string}

//이름 타입
export type NameType = {
  title: string
  first: string
  last: string
}
export type ChangeNameAction = Action<'@remoteUser/changeName'> & {payload: NameType}

//이미지 타입
export type PictureType = {large: string}
export type ChangePictureAction = Action<'@remoteUser/changePicture'> & {
  payload: PictureType
}

export type Actions =
  | setUserAction
  | ChangeNameAction
  | ChangeEmailAction
  | ChangePictureAction
