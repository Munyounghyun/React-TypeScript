// import React, {CSSProperties, DetailedHTMLProps, HtmlHTMLAttributes} from 'react'

// UsingIcon에서 사용
// type IconProps = {
//   name: string
//   style?: CSSProperties
// }

// export const Icon: React.FC<IconProps> = ({name, style}) => {
//   return (
//     <span className="material-icons" style={style}>
//       {name}
//     </span>
//   )
// }

// export const Icon: React.FC<IconProps> = (props) => {
//   const {name,style}=props
//   return (
//     <span className="material-icons" style={style}>
//       {name}
//     </span>
//   )
// }
// export const Icon: React.FC<IconProps> = ({name, ...props}) => {
//   return (
//     <span className="material-icons" {...props}>
//       {name}
//     </span>
//   )
// }

//textContent가 name외의 속성들을 props에 추가해주기 위한 객체 사용
import type {DetailedHTMLProps, FC, HtmlHTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

//className 추가 - UsingIconWithCSSClass에 추가
export type IconProps = ReactSpanProps & {name: string}
export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}
