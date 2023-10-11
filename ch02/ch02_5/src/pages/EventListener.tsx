import React from 'react'

type EventListenerProps = {}

const EventListener: React.FC<EventListenerProps> = ({}) => {
  // ?. : TS의 옵셔널체이닝 연산자 null값을 호출하면 addEventListener을 호출X
  document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log(
      'addEventListener click occurs : ',
      isTrusted,
      ' //// ',
      target,
      ' //// ',
      bubbles
    )
    console.log('-------------')
  })

  document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log(
      'addEventListener click also occurs : ',
      isTrusted,
      ' //// ',
      target,
      ' //// ',
      bubbles
    )
    console.log('*************')
  })
  return <div>EventListener</div>
}

export default EventListener
