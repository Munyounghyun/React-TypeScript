import React, {ChangeEvent} from 'react'

type OnChangeProps = {}

const OnChange: React.FC<OnChangeProps> = ({}) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }
  const OnChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }

  const OnChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }
  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={onChangeValue} placeholder="type some text" />
      <input type="checkbox" onChange={OnChangeChecked} defaultChecked />
      <input type="file" onChange={OnChangeFiles} multiple accept="images/*" />
    </div>
  )
}

export default OnChange
