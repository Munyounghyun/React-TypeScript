import React, {ChangeEvent, useCallback, useState} from 'react'
import * as U from '../../utils'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type LoginProps = Record<'email' | 'password', string>

const initialFormState = {email: '', password: ''}

const Login = ({}) => {
  const [{email, password}, setForm] = useState<LoginProps>(initialFormState)

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm((obj) => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {login} = useAuth()

  const loginAccount = useCallback(() => {
    U.readObjectP<LoginProps>('user')
      .then((user) => {
        if (user) {
          if (user.email !== email || user.password !== password) {
            alert('로그인 실패')
          } else {
            alert('로그인 성공')
            setForm(user)
            login(email, password, () => navigate('/'))
          }
        }
      })
      .catch((e) => {
        alert('???')
      })
  }, [email, password, navigate, Login])

  return (
    <div className="flex flex-col min-h-screen border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={changed('email')}
            className="w-full p-3 mb-4 input input-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={changed('password')}
            className="w-full p-3 mb-4 input input-primary"
          />
          <button type="submit" className="w-full btn btn-primary" onClick={loginAccount}>
            Login
          </button>
        </div>
        <div className="mt-6 text-gray-dark">
          Create account?
          <Link className="btn btn-primary btn-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
