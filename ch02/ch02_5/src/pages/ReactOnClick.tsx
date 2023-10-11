//import type은 타입표기와 선언에 사용도리 선언만 import
import React, {SyntheticEvent} from 'react'
import OnClick from './OnClick'

type ReactOnClickProps = {}

//리액트 이벤트에서 이벤트명은 카멜 표기법
//리액트에서 이벤트 처리 객체는 리액트에서 제공하는 SynthticEvent 사용
//SyntheticEvent의 속성
//nativeEvent., currentTarget, target, preventDefault(), stopPropagtion()
//nativeEvnet : 물리 DOM에서 발생한 세부 타입의 이벤트 객체를 저장할 때 사용
//currentTarget : 버블링 과정에서 현재 이벤트를 수신한 DOM 객체를 알고 싶을 때
//target : 처음 발생한 DOM 객체를 알고 싶을 때
//preventDefault(), stopPropagtion()
const ReactOnClick: React.FC<ReactOnClickProps> = ({}) => {
  const onClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log(
      'ReactOnClick click occurs : ',
      isTrusted,
      ' // ',
      target,
      ' // ',
      bubbles
    )
    console.log('-------------')
  }
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>ReactOnClick</button>
    </div>
  )
}

export default ReactOnClick
