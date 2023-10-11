import {Component} from 'react'

//사용자 컴포넌트 - 클래스 컴포넌트
//반드시 Component를 상속받아야한다.
//render()를 사용한다

export default class App3 extends Component {
  render() {
    const isLoading = true
    const children = isLoading ? (
      <p>Loading...</p>
    ) : (
      <li>
        <a href="google.com" rel="noopener">
          goto Google
        </a>
      </li>
    )
    return <div>{children}</div>
  }
}
