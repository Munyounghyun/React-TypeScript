import {type DetailedHTMLProps, type InputHTMLAttributes, forwardRef} from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type inputProps = ReactInputProps & {}

export const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
  const {className: _className, ...inputProps} = props
  const className = ['input', _className].join(' ')
  return <input ref={ref} {...inputProps} className={className} />
})
