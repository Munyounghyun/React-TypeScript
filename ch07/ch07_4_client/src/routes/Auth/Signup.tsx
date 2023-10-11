import React, {ChangeEvent, useCallback, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type SignupProps = Record<'email' | 'password' | 'confirmPassword', string>

const initialFormState = {email: '', password: '', confirmPassword: ''}

const Signup = ({}) => {
  const [{email, password, confirmPassword}, setForm] =
    useState<SignupProps>(initialFormState)

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm((obj) => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()

  const createAccount = useCallback(() => {
    if (password === confirmPassword) {
      signup(email, password, () => navigate('/login'))
    } else {
      alert('비밀번호가 다릅니다.')
    }
  }, [email, password, confirmPassword, navigate, Signup])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={changed('confirmPassword')}
            className="w-full p-3 mb-4 input input-primary"
          />
          <button
            type="submit"
            className="w-full btn btn-primary"
            onClick={createAccount}>
            Create Account
          </button>
        </div>
        <div className="mt-6 text-gray-dark">
          Already have an account?
          <Link className="btn btn-primary btn-link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
