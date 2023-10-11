import React, {useCallback, useState} from 'react'
import {Icon, Title} from '../components'

type NumberStateProps = {}

const NumberState: React.FC<NumberStateProps> = ({}) => {
  const [count, setCount] = useState<number>(0)

  // const increment = () => {
  //   setCount((count) => count + 1)
  //   console.log(count)
  // }
  // const decrement = () => {
  //   setCount(count - 1)
  // }

  const increment = useCallback(() => {
    setCount(count + 1)
    console.log(count)
  }, [count])

  //매개변수가 어떻게 들어오는거지??
  const decrement = useCallback(() => {
    setCount((a) => a - 1)
    console.log(count)
  }, [])

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon name="add" className="btn-primary" onClick={increment}></Icon>
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon name="remove" className="btn-primary" onClick={decrement}></Icon>
        </div>
      </div>
    </section>
  )
}

export default NumberState
