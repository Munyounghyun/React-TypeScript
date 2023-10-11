import React from 'react'
import {Icon} from '../components'

type UsingIconProps = {}

const UsingIcon: React.FC<UsingIconProps> = ({}) => {
  return (
    <div>
      <h3>Using Icons</h3>
      <Icon name="home" />
      <Icon name="html" />
      <Icon name="css" />
      <Icon name="javascript" className="text-red" />
      <Icon name="check_circle_outline" style={{fontSize: '50px', color: 'pink'}} />
    </div>
  )
}

export default UsingIcon
