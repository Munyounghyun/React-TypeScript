import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Title} from '../components'

export default function CopyMe() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    console.log(e.target.checked)
  }

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex justify-center">
        <input
          type="text"
          className="input input-primary"
          value={value}
          onChange={onChangeValue}
        />
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={checked}
          onChange={onChangeChecked}
        />
      </div>
      <label>value : {value}</label>
      <br />
      <label>{`check : ${checked}`}</label>
      <br />
      <label>check : {checked}</label>

      <div className="mt-4"></div>
    </section>
  )
}
