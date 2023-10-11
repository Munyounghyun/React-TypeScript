import {Component} from 'react'

//사용자 컴포넌트 - 클래스 컴포넌트
//반드시 Component를 상속받아야한다.
//render()를 사용한다

export default class App2 extends Component {
  render() {
    const isLoading = true
    if (isLoading) return <p>loading...</p>
    return (
      <ul>
        <li>
          <a href="google.com" rel="noopener">
            goto Google
          </a>
        </li>
      </ul>
    )
  }
}
