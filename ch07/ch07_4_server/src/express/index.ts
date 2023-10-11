import express from 'express'
import cors from 'cors'
import {setupRouters} from './setupRouters'

export const createExpressApp = (...args: any[]) => {
  const app = express()
  //.use()를 이용해서 미들웨어를 결합
  app
    .use((req, res, next) => {
      console.log(`url = ${req.url}, method = ${req.method}`)
      next() //다음의 진행과정으로 전가
    })
    .use(express.static('public'))
    .use(express.json())
    .use(cors())
    //루트로 접속했을 때 처리하는 라우트
    .get('/', (req, res) => {
      res.json({message: 'Hello Express'})
    })
  return setupRouters(app, ...args)
}
