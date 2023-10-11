import React, {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  //클래스 컴포넌트에서 상태는 항상 state라는 이름의 멤버 속성으로 구현
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer
  }
  //클래스 컴포넌트가 마운트되는 시점에 호출
  componentDidMount(): void {
    const duration = 1000
    //setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalId}) //저정하는 변수의 이름이 같을 때 이름을 생략할 수 있다. => this.setState({intervalId:intervalId})
  }
  //클래스 컴포넌트가 언마운트 발생 직전 실행 : setInterval로 인한 메모리 누수를 방지
  componentWillUnmount(): void {
    clearInterval(this.state?.intervalId)
  }
  render() {
    const today = new Date()
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
