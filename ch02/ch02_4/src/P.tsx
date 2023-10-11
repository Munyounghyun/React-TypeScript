//리액트 17버전 까지 children 속성을 사용할 때
import React, {ReactNode} from 'react'

// type PProps = {
//   children?: ReactNode
// }

// const P: React.FC<PProps> = (props) => {
//   const {children}=props //가 되는것도 es6문법 때문에 js가 알아서 props에 children에 해당하는 값 할당해줌
//   //   return <p children={children}></p>
//   return <p>{children}</p>
// }

// export default P

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//react 18버전 이후부터 children 속성을 PropsWithChildren으로 대체
import {FC, PropsWithChildren} from 'react'

const P: FC<PropsWithChildren> = (props) => {
  //const {children} = props //가 되는것도 es6문법 때문에 js가 알아서 props에 children에 해당하는 값 할당해줌
  //   return <p children={children}></p>
  return <p {...props} />
}

export default P
