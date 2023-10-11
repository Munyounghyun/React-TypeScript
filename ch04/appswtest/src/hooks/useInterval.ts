import {useEffect} from 'react'

const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    const id = setInterval(callback, duration)
    return () => {
      console.log('hello')
      clearInterval(id)
    }
  }, [callback, duration])
}

export default useInterval
