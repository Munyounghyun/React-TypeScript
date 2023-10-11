import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './AppFC'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

//JSX 문법
const hello = 'hello react'
const rootVirtualDom = (
  <ul>
    <li>
      <a href="https://www.google.com" target="_blank">
        <p>go to google</p>
      </a>
    </li>
    <li>
      <p>Expression 표현식 {hello}</p>
    </li>
    <li>
      <p>Excute Statement 실행문 console.log('abcd')</p>
    </li>
  </ul>
)

//순수 리액트 문법
// const rootVirtualDom2 = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'naver.com', target: '_blank'}, [CE('p', null, 'go to naver')])
//   ])
// ])

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  rootVirtualDom
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
