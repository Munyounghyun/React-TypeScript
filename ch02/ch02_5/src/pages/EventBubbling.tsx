import React, {SyntheticEvent} from 'react'

type EventBubblingProps = {}

const EventBubbling: React.FC<EventBubblingProps> = ({}) => {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('EventBubbling on div', isTrusted, target, bubbles, currentTarget)
  }

  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    //prettier-ignore
    console.log('EventBubbling starts on button',isTrusted,target,bubbles,currentTarget)
  }
  //이벤트 흐흠
  //1. 캡처링 단계 - 이벤트가 하위 요소로 전파되는 단계
  //2. 타깃 단계 - 이벤트가 실제 타깃 요소에 도달하는 단계
  //3. 버블링 단계 - 이벤트가 타겟 요소에서 상위 요소로 전파되는 단계

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>EventBubbling</button>
    </div>
  )
}

export default EventBubbling
