import React from 'react'
import logo from './logo.svg'
import './App.css'
import App2 from './App2'
import App3 from './App3'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

//컴포넌트란 리액트로 만들어진 앱을 이루는 최소한의 단위
//사용목적은 뷰를 독립적으로 구성하여 재사용성을 최대화
//컴포넌트는 크게 리액트 컴포넌트와 사용자 컴포넌트로 나눈다.
//리액트는 html5의 각 태그에 대응하는 리액트 컴포넌트를 제공
//컴포넌트를 사용할 경우 로직을 추가할 수 있다.
//이런 로직을 추가할 경우 타입스크립트로 작성

//리액트 컴포넌트의 이름은 div, h1 처럼 첫글자를 소문자로 시작
//태그와 같은 형식을 취하지만, 엄밀히 리액트가 제공하는 컴포넌트
//리액트 컴포넌트 생성 방법 2가지
const h1 = <h1>Hello Component</h1>
const h11 = React.createElement('h1', null, 'Hello React')

//사용자 컴퓨넌트 - 첫글자를 대문자로 시작
//사용목적은 코드를 간결하게 구성할 수 있다.
//사용자 컴포넌트는 함수컴포넌트와 클래스 컴포넌트가 있다.
//함수컴포넌트를 리액트에서 권장 -> 리액트 훅까지 같이 사용

//아래와 같은 사용자 컴포넌트를 함수 컴포넌트라고 한다
//속성을 두는 것은 전달 받기 위함
//사용자 컴포넌트의 속성은 OOP의 속성 + Rerendering을 의미하는 객체타입변수

//함수형 컴포넌트는 클래스 컴포넌트에 비해서 코드를 단순화 시킴 -> 상속X, render()X
//함수형 컴포넌트 : 키워드 방식(함수 선언 방식)
function App() {
  return (
    <div>
      <App2 />
      <App3 />
      <ClassComponent href="https://www.google.com" text="go to google~~~" />
      <ArrowComponent href="https://www.facebook.com" text="go to facebook" />
    </div>
  )
}
export default App
//화살표 함수 방식
// const App = () => {
//   return (
//     <div>
//       <App2 />
//       <App3 />
//       <ClassComponent href="google.com" text="go to google~~~" />
//     </div>
//   )
// }
