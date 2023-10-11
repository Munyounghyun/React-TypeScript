import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './AppFC'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

//JSX 배열 문법
const children = [
  <li>
    <a href="https://www.google.com" target="noopener">
      <p>go to google</p>
    </a>
  </li>,
  <li>
    <a href="https://www.facebook.com" target="noopener">
      <p>go to facebook</p>
    </a>
  </li>,
  <li>
    <a href="https://www.naver.com" target="noopener">
      <p>go to naver</p>
    </a>
  </li>
]
const hello = 'hello react'
const rootVirtualDom = <ul>{children}</ul>

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
