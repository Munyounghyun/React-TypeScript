import type { FC } from "react";
import { Div } from "./Div";
import type { DivProps } from "./Div";

export type AvatarProps = DivProps & {
  size?: string;
};
// prettier-ignore
export const Avatar: FC<AvatarProps> = ({
  className: _className, style, src, size, ...props 
}) => {
  // ?? : null 병합 연산자, 왼쪽 피연산자가 null 또는 undefined이면 오른쪽값 아니면 왼쪽 값
  //console.log(false??true) // false 출력
  //rounded-full 완전 원
  const w_or_h = size ?? '3rem' 
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')
  return (
    <Div
      {...props}
      src={src}
      width={w_or_h}
      height={w_or_h}
      className={className}
      style={style}/>
  )
}
