import React from 'react'
import {Div, Title} from '../components'
import {Button, Input} from '../theme/daisyui'

type LoginProps = {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <form method="post" className="flex justify-center w-full h-full mt-10">
      <Div
        className="box-border flex flex-col items-center justify-center w-1/3 pt-10 pb-16 border-2 mt-44 rounded-3xl"
        minWidth="23rem">
        <Title className="m-2 text-2xl font-black">로그인</Title>
        <Div className="box-border m-4 w-72">
          <Input className="w-full border-inherit" placeholder="아이디" />
        </Div>
        <Div className="w-72">
          <Input
            className="w-full border-inherit"
            placeholder="비밀번호"
            type="password"
          />
        </Div>
        <Div className="box-border m-4 w-72">
          <Button className="w-full btn-primary">로그인</Button>
        </Div>
        <Div className="w-72">
          <Button className="w-full text-white bg-green-600 hover:bg-green-500">
            회원가입
          </Button>
        </Div>
      </Div>
    </form>
  )
}

export default Login
