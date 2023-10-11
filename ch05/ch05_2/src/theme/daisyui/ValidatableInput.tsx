import type {ReactInputProps} from './Input'
import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react'

export type ValidatableInputMethods = {
  validate: () => [boolean, string]
}

//forwardRef를 활용하여 사용자컴포넌트에서도 ref 적용 가능
export const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(
  ({type, className: _className, ...inputProps}, methodsRef) => {
    const className = useMemo(() => ['input', _className].join(' '), [_className])
    const inputRef = useRef<HTMLInputElement>(null)

    //다른 컴포넌트들과 달리 컴포넌트 내부에서만 사용해야한다.
    useImperativeHandle(
      methodsRef,
      () => ({
        validate: (): [boolean, string] => {
          const value = inputRef.current?.value
          if (!value || !value.length) return [false, '사용자가 입력한 내용이 없습니다']

          switch (type) {
            case 'email': {
              const regEx =
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
              const valid = regEx.test(value)
              return valid ? [true, value] : [false, '틀린 이메일 주소입니다']
            }
          }
          return [true, value]
        }
      }),
      [type]
    )

    return <input {...inputProps} className={className} ref={inputRef} />
  }
)
