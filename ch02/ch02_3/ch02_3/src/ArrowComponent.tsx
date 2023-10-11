import type {FC} from 'react'
//FC : Function Component
type ArrowComponentProps = {
  href: string
  text: string
}
//props는 Component의 속성의 props가 아니라 매개변수명
const ArrowComponent: FC<ArrowComponentProps> = ({href, text}) => {
  return (
    <ul>
      <li>
        <a href={href} rel="noopener">
          {text}
        </a>
      </li>
    </ul>
  )
}
export default ArrowComponent
