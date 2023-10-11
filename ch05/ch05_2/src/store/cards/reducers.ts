import * as T from './types'

//types 의 state의 card[]배열의 내용을 빈배열로 초기화
const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [action.payload, ...state]
    case '@cards/removeCard':
      //filter 스트림을 통해 각각의 카드와 비교하면서 uuid 가 삭제된 경우 false를 리턴하여 표시 안됨
      return state.filter((card) => card.uuid !== action.payload)
  }
  return state
}
