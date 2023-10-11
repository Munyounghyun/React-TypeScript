import {ChangeEvent, FormEvent, useCallback, useRef, useState} from 'react'
import {Title} from '../components'

export default function ObjectState() {
  //2. 객체형태로 구현할 때
  type FormType = {
    name: string
    email: string
  }
  const refName = useRef<HTMLInputElement>(null)
  const refEmail = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() //웹브라우저가 onSubmit이벤트가 발생하면 form페이지를 리렌더링함 => 리랜더링을 방지
      if (form?.name === '') {
        alert('Please Check Name')
        return refName.current?.focus()
      }
      if (form?.email === '') {
        alert('Please Check Eamil')
        return refEmail.current?.focus()
      }
      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({...form, name: e.target.value}))
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({...form, email: e.target.value}))
  }, [])

  return (
    <section className="mt-4">
      <Title className="text-5xl font-bold text-center">ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">UserName</span>
            </label>
            <input
              type="text"
              className="input input-primary"
              id="name"
              ref={refName}
              value={form.name}
              onChange={onChangeName}
              placeholder="enter your name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input
              type="text"
              className="input input-primary"
              id="email"
              ref={refEmail}
              value={form.email}
              onChange={onChangeEmail}
              placeholder="enter your email"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/2 btn btn-sm btn-primary"
            />
            <input
              type="button"
              defaultValue="Cancel"
              className="w-1/2 ml-4 btn btn-sm"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
