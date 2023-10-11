import React, {Component} from 'react'

// 기본 함수 컴포넌트
// export default function App() {
//   return <div>App</div>
// }

//클래스 컴포넌트1
// export default class App extends Component {
//   render() {
//     return <div>App</div>
//   }
// }

//클래스 컴포넌트2 : JSX만으로 부족한 로직 추가
// export default class App extends Component {
//   render() {
//     const isLoading = true
//     if (isLoading) return <p>Loading...</p>
//     return <div>App</div>
//   }
// }

//단축 평가
export default class App extends Component {
  render() {
    const isLoading = true
    const children = (
      <ul>
        <li>
          <a href="www.google.com">
            <p>go to google</p>
          </a>
        </li>
      </ul>
    )
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && children}
      </div>
    )
  }
}
