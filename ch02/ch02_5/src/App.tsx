import React from 'react'
import logo from './logo.svg'
import './App.css'
import EventListener from './pages/EventListener'
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInput from './pages/VariousInput'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'

//Event type은 웹브라우저 자바스크립트 엔진에서 제공
//type : event 이름
//isTrusted : 브라우저에서 발생(true), 프로그래밍 발생(false)
//target : 이벤트가 처음 발생한 HTML 요소
//currentTarget : 버블링 중에 이벤트가 현재 진행되는 위치
//bubbles : 이벤트가 DOM을 타고 버블링 될지 여부 결정

function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInput />
      <StopPropagation />
      <EventBubbling />
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  )
}

export default App
