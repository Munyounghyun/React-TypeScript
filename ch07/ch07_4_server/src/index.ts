import {createServer} from 'http'
import {createExpressApp} from './express'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'
import 'dotenv/config'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {
  const hostname = 'localhost',
    port = process.env.PORT_NUMBER

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}
connectAndUseDB(connectCallback, 'mydb')
