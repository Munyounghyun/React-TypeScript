import {useState, useCallback} from 'react'
import {Subtitle, Title} from '../components'
import {Icon} from '../theme/daisyui'
import type {Appstate} from '../store'
import * as C from '../store/counter'
import {useDispatch, useSelector} from 'react-redux'

export default function CounterTest() {
  const counter = useSelector<Appstate, C.State>(({counter}) => counter)

  const dispatch = useDispatch()

  const increment = useCallback(() => dispatch(C.incrementCounter()), [dispatch])

  const decrement = useCallback(() => dispatch(C.decrementCounter()), [dispatch])

  return (
    <section className="mt-4 mb-8">
      <Title>CounterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="add_circle" onClick={increment} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="remove_circle" onClick={decrement} />
        </div>
      </div>
    </section>
  )
}
