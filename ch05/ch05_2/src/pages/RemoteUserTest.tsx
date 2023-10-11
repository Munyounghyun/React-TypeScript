import {useSelector, useDispatch} from 'react-redux'
import {useCallback, useState} from 'react'
import {Avatar, Title} from '../components'
import {useToggle} from '../hooks'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import type {Appstate} from '../store'
import * as R from '../store/remoteUser'

export default function RemoteUserTest() {
  const dispatch = useDispatch()
  const user = useSelector<Appstate, R.State>(({remoteUser}) => remoteUser)
  //API 서버에서 가져온 데이터 선언
  const [loading, toggleLoading] = useToggle()
  const [error, setError] = useState<Error | null>(null)
  // const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)

  const changeName = useCallback(() => {
    D.fetchRandomUser().then((user) => dispatch(R.changeName(user.name)))
  }, [dispatch])

  const changeEmail = useCallback(
    () => dispatch(R.changeEmail(D.randomEmail())),
    [dispatch]
  )

  const changePicture = useCallback(
    () => dispatch(R.changePicture({large: D.randomAvatar()})),
    [dispatch]
  )

  const getRemoteUser = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then((user) => dispatch(R.setUser(user)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispatch, toggleLoading])

  return (
    <section className="mt-4">
      <Title>RemoteUserTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
          <span>get remote user</span>
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          <span>change name</span>
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
          <span>change email</span>
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          <span>change picture</span>
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <p className="btn btn-primary loading"></p>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center">
          <Button className="btn btn-primary loading">{error.message}</Button>
        </div>
      )}
      {!loading && user && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={user.picture.large} />
          <div className="ml-4">
            <p className="text-xl ">
              {user.name.title}.{user.name.first}
              {user.name.last}
            </p>
            <p className="italic text-gray-600">{user.email}</p>
          </div>
        </div>
      )}
    </section>
  )
}
