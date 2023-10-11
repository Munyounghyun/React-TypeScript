import {Console, log} from 'console'
import React, {DragEvent} from 'react'

type DragDropProps = {}

const DragDrop: React.FC<DragDropProps> = ({}) => {
  //DragDrop event 종류
  //dragenter : 드롭 대상 위로 마우스가 올라갈 때
  //dragstart : 드래그하기 시작할 때
  //drag : 드래그가 발생할 때
  //dragover : 적합한 드래그 대상 위로 지나갈 때
  //dragleave : 적합한 드래그 대상을 벗어날 때
  //dragend : 드래그가 끝날 때
  //drop : 적합한 대상에 드롭 할 때

  const onDragStart = (e: DragEvent<HTMLInputElement>) => {
    console.log('onDragStart', e.dataTransfer)
  }
  const onDragEnd = (e: DragEvent<HTMLInputElement>) => {
    console.log('onDragEnd', e.dataTransfer)
  }
  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDragOver')
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div draggable onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drag Me2</h1>
      </div>
    </div>
  )
}

export default DragDrop
