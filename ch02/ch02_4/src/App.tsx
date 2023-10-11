import React from 'react'
import logo from './logo.svg'
import './App.css'
import P from './P'

function App() {
  //key 속성은 같은 이름의 컴포넌트가 있을때 이를 구분하기 위함
  //key 속성은 웹브라우저에서는 보이지 않는다. 컴포넌트에서만 사용
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>]

  //사용자 컴포넌트 내부에서 children 속성 사용
  const texts2 = ['hello', 'world'].map((text, index) => (
    <P key={index} children={text} />
  ))

  //children 속성은 하위컴포넌트가 생성안되는 태그에는 사용불가
  //children 속성은 컴포넌트가 부모관계가 설정되었을 때 부모가 자손에게 접근하는 방법제공
  //children ?: React Node | undefinded
  return (
    <>
      <div children={texts2} />
    </>
  )
}
export default App
