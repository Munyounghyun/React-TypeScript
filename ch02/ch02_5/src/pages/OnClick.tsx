import React from 'react'

type OnClickProps = {}

const OnClick: React.FC<OnClickProps> = ({}) => {
  const rootDiv = document.getElementById('root')

  if (rootDiv) {
    rootDiv.onclick = (e: Event) => {
      //한번만 출력되는 이유는 onclick이 정의된 마지막 함수로 지정
      const {isTrusted, target, bubbles} = e
      console.log('onclick click occurs : ', isTrusted, ' // ', target, ' // ', bubbles)
      console.log('-------------')
    }

    rootDiv.onclick = (e: Event) => {
      const {isTrusted, target, bubbles} = e
      console.log(
        'onclick click also occurs : ',
        isTrusted,
        ' // ',
        target,
        ' // ',
        bubbles
      )
      console.log('***********')
    }
  }

  //위와 같음
  // rootDiv?.onclick=(e:Event)=>{

  // }
  return <div>OnClick</div>
}

export default OnClick
