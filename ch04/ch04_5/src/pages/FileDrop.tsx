import {ChangeEvent, DragEvent, useCallback, useMemo, useRef, useState} from 'react'
import {Div, Title} from '../components'
import {imageFileReaderP} from '../utils'
import {useToggle} from '../hooks'

export default function FileDrop() {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, toggleLoading] = useToggle(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const onDivClick = useCallback(() => inputRef.current?.click(), [])

  //이미지 변환을 위한 함수 선언
  const makeImageUrls = useCallback(
    (files: File[]) => {
      const promises = Array.from(files).map(imageFileReaderP) //Array.from은 File[]를 string[]로 변환
      toggleLoading()
      Promise.all(promises)
        .then((urls) => {
          setImageUrls((imageUrls) => [...urls, ...imageUrls])
          console.log(imageUrls)
        })
        .catch(setError)
        .finally(toggleLoading)
    },
    [toggleLoading]
  )
  //input file의 변화를 감지하기 위한 함수 선언
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      const files: FileList | null = e.target.files // Filelist타입(유사배역객체)을 리턴
      files && makeImageUrls(Array.from(files)) //Array.from은 FileList를 File[]로 변환
    },
    [makeImageUrls]
  )

  const images = useMemo(
    () =>
      imageUrls.map((url, index) => (
        <Div
          key={index}
          src={url}
          className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
          width="5rem"
          height="5rem"
        />
      )),
    [imageUrls]
  )
  const onDivDragOver = useCallback((e: DragEvent) => e.preventDefault(), [])
  const onDivDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      setError(null)
      const files = e.dataTransfer?.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}

      <div
        onClick={onDivClick}
        className="w-full mt-4 bg-gray-200 border border-gray-500">
        {loading && (
          <div className="flex items-center justify-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}

        <div
          onDragOver={onDivDragOver}
          onDrop={onDivDrop}
          className="flex flex-col items-center justify-center h-40 cursor-pointer">
          <p className="text-3xl font-bold">drop images or click me</p>
        </div>
        <input
          ref={inputRef}
          onChange={onInputChange}
          multiple
          className="hidden"
          type="file"
          accept="image/*"
        />
      </div>

      <div className="flex flex-wrap justify-center">{images}</div>
    </section>
  )
}
