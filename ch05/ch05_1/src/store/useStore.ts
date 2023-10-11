import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'

//reducer에서 반환한 새로운 상태를 store라는 객체로 정리해 관리하는 configureStore함수를 제공
const initializeStore = () => {
  const store = configureStore({reducer: rootReducer, middleware: []})
  return store
}

//store를 사용하기 위한 useStore()
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
