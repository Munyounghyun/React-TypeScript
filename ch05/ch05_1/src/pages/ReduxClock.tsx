import React from 'react'
import type {AppState} from '../store'
import {Div, Title, Subtitle} from '../components'
import {useSelector, useDispatch} from 'react-redux'
import {useInterval} from '../hooks'

type ReduxClockProps = {}

const ReduxClock: React.FC<ReduxClockProps> = ({}) => {
  //useSelector :: store에 상태값을 알고자 할때
  //리덕스 스토어에 어떤 내용이 저장되었는지 알고자 스토어의 상탯값을 반환해주는 useSelector
  const today = useSelector<AppState, Date>((state) => state.today)

  //store에 내용을 보낼때
  const dispatch = useDispatch()
  //dispatch()함수는 리덕스 스토어에 저장된 AppState 객체의 멤버 전부나 일부를 변경할 때 사용

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date()})
  })
  return (
    <Div className="flex flex-col items-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}

export default ReduxClock
