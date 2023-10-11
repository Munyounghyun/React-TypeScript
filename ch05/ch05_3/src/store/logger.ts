import {Action, Dispatch} from 'redux'

export default function logger<S = any>({getState}: {getState: () => S}) {
  return (next: Dispatch) => (action: Action) => {
    //next 함수를 호출하기 전 store의 상태와 유입된 액션을 출력
    console.log('state befor next', getState())
    console.log('action', action)

    const returnedAction = next(action)

    //next 호출 후 store의 상태 출력
    console.log('state after next', getState())
    return returnedAction
  }
}
