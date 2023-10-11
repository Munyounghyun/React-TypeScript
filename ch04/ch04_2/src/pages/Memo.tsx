import React, {useMemo} from 'react'
import * as D from '../data'
import {Avatar, Title} from '../components'

type MemoProps = {}

const Memo: React.FC<MemoProps> = ({}) => {
  const headTexts = useMemo<string[]>(
    () => ['No', 'Name', 'Job Title', 'Email Address'],
    []
  )

  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

  const head = useMemo(
    () => headTexts.map((text) => <th key={text}>{text}</th>),
    [headTexts]
  )

  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="2rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  )
  return (
    <div className="mt-4">
      <Title>useMemoTest</Title>
      <div className="w-full p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra compact">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Memo
