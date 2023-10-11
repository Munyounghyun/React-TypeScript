import React from 'react'
import Link from '../../components/Link'

type NavigationBarProps = {}

const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
  return (
    <div className="flex p-2 navbar bg-base-100">
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      <Link to="/board" className="ml-4 btn btn-link">
        Board
      </Link>
    </div>
  )
}

export default NavigationBar
