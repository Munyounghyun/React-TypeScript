import {useCallback} from 'react'
import {Subtitle, Title} from '../components'
import {Button, Modal, ModalAction, ModalContent} from '../theme/daisyui'
import * as D from '../data'
import {useToggle} from '../hooks'

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle(false)
  const onAccept = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])
  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          Open Modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          closeIconClassName="btn-primary btn-outline"
          onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
        </ModalContent>
        <ModalAction>
          <button className="btn btn-primary" onClick={onAccept}>
            Accept
          </button>
          <button className="btn" onClick={toggleOpen}>
            Close
          </button>
        </ModalAction>
      </Modal>
    </section>
  )
}
