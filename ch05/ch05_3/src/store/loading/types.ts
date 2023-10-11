import type {Action} from 'redux'

export type State = boolean

export type setLoadingAction = Action<'@loading/setLoadingAction'> & {payload: State}

export type Actions = setLoadingAction
