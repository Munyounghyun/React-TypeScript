import React from 'react'
import type {Appstate} from '../store'
import {Div, Title} from '../components'
import {useSelector, useDispatch} from 'react-redux'
import {useInterval} from '../hooks'
import * as C from '../store/clock'

type ClockTestProps = {}

const ClockTest: React.FC<ClockTestProps> = ({}) => {
  const clock = useSelector<Appstate, C.State>((state) => state.clock)
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch(C.setClock(new Date()))
  })
  return (
    <Div className="mt-4">
      <Title className="text-5xl">ClockTest</Title>
      <div className="flex items-center flex-col mt-4 text-3xl">
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleTimeString()}</p>
        <p className="text-lg text-blue-400 text-bold">{clock.toLocaleDateString()}</p>
      </div>
    </Div>
  )
}

export default ClockTest
