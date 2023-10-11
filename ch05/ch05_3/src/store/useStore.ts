import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useMemo} from 'react'
// import logger from './logger'
import logger from 'redux-logger'
import thunk from 'redux-thunk' //action을 함수로서 호출해 주는 기능을 추가한 미들웨어

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const middleware: any[] = [thunk]
  if (useLogger) {
    middleware.push(logger)
  }
  const store = configureStore({reducer: rootReducer, middleware}) //=> middleware:middleware
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
