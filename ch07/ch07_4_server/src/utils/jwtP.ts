import type {Jwt, JwtPayload} from 'jsonwebtoken'
import {sign, verify} from 'jsonwebtoken'
import type {SignOptions, VerifyOptions} from 'jsonwebtoken'

const secret = 'very important secret'

//JWT 서명을 비동기적으로 생성하는 Promise를 반환 - 암호화
export const jwtSignP = (payload: string | Buffer | object, options: SignOptions = {}) =>
  new Promise<string>((resolve, reject) => {
    try {
      const jwt = sign(payload, secret, options)
      resolve(jwt)
    } catch (e) {
      reject(e)
    }
  })

// JWT 토큰을 비동기적으로 검증하고 해독 - 복호화
export const jwtVerifyP = (token: string, options: VerifyOptions = {}) =>
  new Promise<Jwt | JwtPayload | string>((resolve, reject) => {
    try {
      const decoded = verify(token, secret, options)
      resolve(decoded)
    } catch (e) {
      reject(e)
    }
  })
