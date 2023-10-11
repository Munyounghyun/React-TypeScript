import type {Action} from 'redux'

export type State = Date

//@ 타입의 오류를 방지하기위함
export type setClockAction = Action<'@clock/setClock'> & {payload: State}

export type Actions = setClockAction
