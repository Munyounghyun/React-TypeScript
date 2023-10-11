import React from 'react'

type VariousInputProps = {}

const VariousInput: React.FC<VariousInputProps> = ({}) => {
  return (
    <div>
      <p>VariousInput</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter your email" />
        <input type="range" />
        <input type="button" value="Button" />
        <input type="checkbox" value="check" defaultChecked />
        <input type="radio" value="radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}

export default VariousInput
