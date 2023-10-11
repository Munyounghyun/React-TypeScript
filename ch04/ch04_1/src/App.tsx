import {useEffect, useState} from 'react'
import './App.css'
import Clock from './pages/Clock'
import {useClock} from './hooks'

function App() {
  //const [today, setToday] = useState(new Date())

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setToday(new Date())
  //   }, 1000)
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setToday(new Date())
  //   }, 1000)
  // }, [today])

  //사용자 정의 hook
  const today = useClock()

  return (
    <main>
      <Clock today={today} />
    </main>
  )
}

export default App
