import React, {useCallback, useState} from 'react'
import {Button, Modal, ModalAction, ModalContent} from '../theme/daisyui'
import {useToggle} from '../hooks/useToggle'
import {Subtitle} from '../components'
import {userInfo} from './Join'

type JoinModalProps = {userInfo: userInfo}

const JoinModal: React.FC<JoinModalProps> = ({userInfo}) => {
  const [open, toggleOpen] = useToggle(false)

  // const onAccept = useCallback(() => {
  //   toggleOpen()
  //   console.log(userInfo)
  // }, [toggleOpen])

  //회원데이터 넘기기 추가
  const onAccept = () => {
    toggleOpen()
    console.log(userInfo)
  }

  return (
    <>
      <div className="flex justify-center p-4">
        <Button className="w-32 btn-primary" onClick={toggleOpen}>
          회원가입
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          closeIconClassName="material-icons btn-primary btn-outline"
          onCloseIconClicked={toggleOpen}>
          <Subtitle>회원가입</Subtitle>
          <p className="mt-5">회원가입을 하시겠습니까?</p>
          <ModalAction className="flex justify-between">
            <button className="btn btn-primary" onClick={onAccept}>
              Accept
            </button>
            <button className="btn" onClick={toggleOpen}>
              Close
            </button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </>
  )
}

export default JoinModal
