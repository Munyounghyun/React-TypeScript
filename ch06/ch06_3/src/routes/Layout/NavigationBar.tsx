import React from 'react'
import {Link as RR} from 'react-router-dom'
import Link from '../../components/Link'
import {useAuth} from '../../contexts'

type NavigationBarProps = {}

const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
  const {loggedUser} = useAuth()
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        {loggedUser && ( //로그인하면 보임
          <Link to="/board" className="ml-4 btn btn-link">
            Board
          </Link>
        )}
      </div>
      <div className="flex p-2 items-center">
        {!loggedUser && ( // 로그인하면 안보임
          <>
            <RR to="/login" className="ml-4 btn btn-sm btn-primary flex items-center">
              Login
            </RR>
            <RR
              to="/signup"
              className="ml-4 btn btn-sm btn-primary btn-outline flex items-center">
              SignUp
            </RR>
          </>
        )}
        {loggedUser && ( //로그인하면 보임
          <RR to="/logout" className="ml-4 mr-4">
            Logout
          </RR>
        )}
      </div>
    </div>
  )
}

export default NavigationBar
