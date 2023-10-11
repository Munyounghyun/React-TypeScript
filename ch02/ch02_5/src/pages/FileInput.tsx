import React, {ChangeEvent} from 'react'

type FileInputProps = {}

const FileInput: React.FC<FileInputProps> = ({}) => {
  const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) //const file=files[i]
        console.log(`files[${i}]`, file)
      }
    }
  }
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={OnChange} multiple accept="images/*" />
    </div>
  )
}

export default FileInput
