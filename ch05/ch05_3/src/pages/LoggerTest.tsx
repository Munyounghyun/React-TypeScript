import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Title} from '../components'

type LoggerTestProps = {}

const LoggerTest: React.FC<LoggerTestProps> = ({}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'hello', payload: 'world'})
  }, [dispatch])
  return (
    <section className="mt-4">
      <Title className="font-bold text_5xl text-center">LoggerTest</Title>
      <div></div>
    </section>
  )
}

export default LoggerTest
