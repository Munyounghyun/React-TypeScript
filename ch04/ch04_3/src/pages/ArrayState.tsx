import {useCallback, useMemo, useState} from 'react'
import {Div, Title} from '../components'
import * as D from '../data'
import {Icon} from '../theme/daisyui'
export default function ArrayState() {
  const [image, setImage] = useState<string[]>([])
  const addImage = useCallback(() => {
    setImage((image) => [D.randomImage(200, 100, 50), ...image])
  }, [])
  const clearImage = useCallback(() => {
    setImage(() => [])
  }, [])

  const children = useMemo(
    () =>
      image.map((item, index) => (
        <Div
          key={index}
          src={item}
          className="w-full m-2"
          height="5rem"
          minHeight="5rem"></Div>
      )),
    [image]
  )

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImage} />
        </div>
        {/* {image.map((image, index) => (
          <div className="flex flex-wrap mt-4">
            <img src={image} alt="" />
          </div>
        ))} */}
        <div className="flex flex-wrap mt-4">{children}</div>
      </div>
    </section>
  )
}
