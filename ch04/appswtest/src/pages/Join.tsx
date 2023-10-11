import React, {ChangeEvent, useState} from 'react'
import {Div, Title} from '../components'
import {Button, Input} from '../theme/daisyui'
import JoinModal from './JoinModal'

type JoinProps = {}

//유저 데이터 타입
export type userInfo = {
  name: string
  id: string
  pw: string
  gend: string
  firstphone: number
  midPhone: number
  lastPhone: number
  hob: string
}

const Join: React.FC<JoinProps> = ({}) => {
  const [name, setName] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [gend, setGend] = useState<string>('')
  const [firstphone, setFirstphone] = useState<number>(0)
  const [midPhone, setMidPhone] = useState<number>(0)
  const [lastPhone, setLastPhone] = useState<number>(0)
  const [hob, setHob] = useState<string>('')

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  const onChangeGend = (e: ChangeEvent<HTMLInputElement>) => {
    setGend(e.target.value)
  }

  const onChangeFirstPhone = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstphone(Number(e.target.value))
  }

  const onChangeMidPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setMidPhone(Number(e.target.value))
  }

  const onChangeLastPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setLastPhone(Number(e.target.value))
  }

  const onChangeHobby = (e: ChangeEvent<HTMLInputElement>) => {
    setHob(e.target.value)
  }

  //회원가입해서 넘겨주기위한 데이터
  const userInfo = {
    name,
    id,
    pw,
    gend,
    firstphone,
    midPhone,
    lastPhone,
    hob
  }

  return (
    <Div className="flex flex-col items-center h-full mt-20">
      <Div
        className="w-1/2 p-10 border-2 border-gray-400 rounded-2xl"
        minWidth="650px"
        maxWidth="650px">
        <Title className="m-5 text-2xl">회원가입</Title>
        <Div className="m-3">
          <Input
            type="text"
            className="w-80 input-bordered"
            placeholder="이름"
            onChange={onChangeName}
          />
        </Div>
        <Div className="m-3">
          <Input
            type="text"
            className="w-80 input-bordered "
            placeholder="아이디"
            onChange={onChangeId}
          />
        </Div>
        <Div className="m-3">
          <Input
            type="password"
            className="w-80 input-bordered"
            placeholder="비밀번호"
            onChange={onChangePw}
          />
        </Div>
        <Div className="flex items-center justify-center">
          <p>성별 : </p>
          <Div className="flex items-center justify-center w-20">
            <p className="mr-1">남자</p>
            <Input type="radio" name="gender" value="man" onChange={onChangeGend} />
          </Div>
          <Div className="flex items-center justify-center w-20">
            <p className="mr-1">여자</p>
            <Input type="radio" name="gender" value="woman" onChange={onChangeGend} />
          </Div>
        </Div>
        <Div className="flex items-center justify-center">
          <select
            className="select select-bordered"
            name="tel"
            id="tel"
            onChange={onChangeFirstPhone}>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="051">051</option>
          </select>
          <p className="ml-1 mr-1">-</p>
          <Input className="input-bordered" onChange={onChangeMidPhone} />
          <p className="ml-1 mr-1">-</p>
          <Input className="input-bordered" onChange={onChangeLastPhone} />
        </Div>
        <Div className="flex items-center justify-center">
          <p>취미 : </p>
          <Div className="flex items-center justify-center w-20">
            <p className="mr-1">음악</p>
            <Input type="checkbox" name="hobby" value="music" onChange={onChangeHobby} />
          </Div>
          <Div className="flex items-center justify-center w-20">
            <p className="mr-1">영화</p>
            <Input type="checkbox" name="hobby" value="movie" onChange={onChangeHobby} />
          </Div>
          <Div className="flex items-center justify-center w-20">
            <p className="mr-1">운동</p>
            <Input
              type="checkbox"
              name="hobby"
              value="exercise"
              onChange={onChangeHobby}
            />
          </Div>
        </Div>
        <Div>
          <JoinModal userInfo={userInfo} />
        </Div>
      </Div>
    </Div>
  )
}

export default Join
