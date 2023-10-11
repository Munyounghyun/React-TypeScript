import type {AppState} from './AppState'
import type {Actions} from './actions'

const initialAppState = {
  today: new Date()
}

//dispatch로 넘겨진 데이터는 action이 가지고 있음
export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return {...state, today: action.today}
    }
  }
  return state // 반드시 있어야 한다.
}
