import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './AppFC'
import reportWebVitals from './reportWebVitals'
import * as D from './data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

//JSX 배열 문법
//key값이 없을 경우
const children = [1, 2, 3].map((n: number, index) => (
  <h3 key={n}>
    Array {n}/{index}
  </h3>
))
const children2 = D.makeArray(10).map((notused, index) => (
  <div key={index}>
    <p>{D.randomID()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomsentence()}</p>
    <img src={D.randomAvatar()} alt="#" width={200} />
  </div>
))

const rootVirtualDom = (
  <ul>
    {children}
    {children2}
  </ul>
)

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
