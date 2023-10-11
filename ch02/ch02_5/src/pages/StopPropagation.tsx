import React, {SyntheticEvent} from 'react'

type StopPropagationProps = {}

const StopPropagation: React.FC<StopPropagationProps> = ({}) => {
  const onDivClick = (e: SyntheticEvent) => {
    console.log('StopPropagation on div')
  }

  const onButtonClick = (e: SyntheticEvent) => {
    console.log('StopPropagation starts on button and call StopPropagation')
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>StopPropagation</button>
    </div>
  )
}

export default StopPropagation
