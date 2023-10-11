import React from 'react'

type DispatchEventProps = {}

const DispatchEvent: React.FC<DispatchEventProps> = ({}) => {
  const onCallDispatchEvent = () => {
    console.log('onCallDispatchEvent')
    //dispatchEvent는 EventTarget의 메서드로 boolan값을 리턴한다 false일 경우 dispatch 동작 X(호출 안함)
    //Event 객체를 통해서 새로운 이벤트를 정의 할 수 있음

    //dispatch가 새롭게 정의된 Event객체를 호출함
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}))
  }
  const onCallclick = () => {
    console.log('onCallclick')
    document.getElementById('root')?.click() //root에서 click 이벤트를 실행시킴
  }

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallclick}>call click</button>
    </div>
  )
}

export default DispatchEvent
