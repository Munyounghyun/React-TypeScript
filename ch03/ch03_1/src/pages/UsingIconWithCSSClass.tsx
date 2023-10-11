import React from 'react'
import {Icon} from '../components'

type UsingIconWithCSSClassProps = {}

const UsingIconWithCSSClass: React.FC<UsingIconWithCSSClassProps> = ({}) => {
  return (
    <div>
      <h3>UsingIconWithCSSClass</h3>
      <Icon name="home" className="text-blue" style={{fontSize: '50px'}} />
    </div>
  )
}

export default UsingIconWithCSSClass
