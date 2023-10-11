import {useReducer} from 'react'
import type {AppState} from '../store'
import type {SetTodayAction} from '../store/actions'
import {Div, Title, Subtitle} from '../components'
import {useInterval} from '../hooks'

export default function UseReducerClock() {
  //useReducer()는 리덕스의 리듀서와 사실상 똑같은 기능 수행
  //하지만 호출한 컴포넌트안에서만 유효(지역 상태) ReduxProvider와 같은 컨텍스트 없이 사용하기 때문
  //리덕스의 상태는 앱의 모든 컴포넌트에서 가능(전역 상태)
  const [{today}, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return {...state, today: new Date()}
      }
    },
    {
      today: new Date()
    }
  )

  useInterval(() => {
    //dispatch의 매개변수는 리듀서의 action으로 넘겨짐
    dispatch({type: 'setToday', today: new Date()})
  })

  return (
    <Div className="flex flex-col items-center justify-center h-24">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
