import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext, useState, useCallback, useEffect} from 'react'
import * as U from '../utils'
import {post} from '../server'

export type LoggedUser = {email: string; password: string}
type Callback = () => void //선언

// 선언
type ContextType = {
  jwt?: string
  errorMessage?: string
  loggedUser?: LoggedUser // 공유 시키려는 데이터 속성
  signup: (email: string, password: string, callback?: Callback) => void
  login: (email: string, password: string, callback?: Callback) => void
  logout: (callback?: Callback) => void
}

// 위의 선언을 초기화
export const AuthContext = createContext<ContextType>({
  signup: (email: string, password: string, callback?: Callback) => {},
  login: (email: string, password: string, callback?: Callback) => {},
  logout: (callback?: Callback) => {}
})

type AuthProviderProps = {}

// 프로바이더 생성
export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({children}) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(undefined)
  const [jwt, setJwt] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  //회원가입
  const signup = useCallback((email: string, password: string, callback?: Callback) => {
    const user = {email, password}
    if (email !== '' && password !== '') {
      post('/auth/signup', user)
        .then((res) => res.json())
        .then((result: {ok: boolean; body?: string; errorMessage?: string}) => {
          const {ok, body, errorMessage} = result
          if (ok) {
            U.writeStringP('jwt', body ?? '').finally(() => {
              setJwt(body ?? '')
              setLoggedUser(() => user)
              U.writeObjectP('user', user)
              if (callback) callback()
            })
          } else setErrorMessage(errorMessage ?? '')
        })
        .catch((e: Error) => setErrorMessage(e.message))
    } else {
      setErrorMessage(() => '이메일과 비밀번호를 입력해주세요')
    }
  }, [])

  //로그인
  const login = useCallback((email: string, password: string, callback?: Callback) => {
    const user = {email, password}
    U.readStringP('jwt')
      .then((jwt) => {
        setJwt(jwt ?? '')
        return post('/auth/login', user, jwt)
      })
      .then((res) => res.json())
      .then((result: {ok: boolean; errorMessage?: string}) => {
        if (result.ok) {
          setLoggedUser(() => user)
          callback && callback()
        } else {
          setErrorMessage(result.errorMessage ?? '')
        }
      })
      .catch((e: Error) => setErrorMessage(e.message ?? ''))
  }, [])

  //로그아웃
  const logout = useCallback((callback?: Callback) => {
    setJwt(() => '') //localStorage에 jwt를 지우는 것이 아니고 useAuth를 통해서 jwt를 지움
    setLoggedUser(undefined)
    callback && callback()
    U.writeStringP('jwt', '')
      .then(() => {})
      .catch(() => {})
  }, [])
  useEffect(() => {
    const deleteToken = false // localStorage의 jwt 값을 초기화해야 하는 경우 사용
    if (deleteToken) {
      U.writeStringP('jwt', '')
        .then(() => {})
        .catch(() => {})
    } else {
      U.readStringP('jwt')
        .then((jwt) => setJwt(jwt ?? ''))
        .catch(() => {
          /* 에러 무시 */
        })
    }
  }, [])

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage)
      setErrorMessage((notUsed) => '')
    }
  }, [errorMessage])

  const value = {
    jwt,
    errorMessage,

    loggedUser,
    signup,
    login,
    logout
  }
  return <AuthContext.Provider value={value} children={children} /> //최종 반환 구문
}

export const useAuth = () => {
  return useContext(AuthContext)
}
