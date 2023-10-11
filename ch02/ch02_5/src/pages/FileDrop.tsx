import React, {DragEvent} from 'react'

type FileDropProps = {}

const FileDrop: React.FC<FileDropProps> = ({}) => {
  const onDragOver = (e: DragEvent) => e.preventDefault()

  const onDrop = (e: DragEvent) => {
    e.preventDefault() //이미지 파일이 브라우저에 보이는것 방지
    const files: FileList | null = e.dataTransfer.files
    console.log('onDrop', e.dataTransfer.files)
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) //const file=files[i]
        console.log(`files[${i}]`, file)
      }
    }
  }
  return (
    <div>
      <p>FileDrop</p>
      <div draggable onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image-files</h1>
      </div>
    </div>
  )
}

export default FileDrop
