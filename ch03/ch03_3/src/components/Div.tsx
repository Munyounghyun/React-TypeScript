import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import type { WidthHeight } from "./WidthHeight";
import type { LeftRightTopBottom } from "./LeftRightTopBottom";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom & {
    src?: string;
  };

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className, //_는 내부적으로 사용할 때
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
  };
  //tailwindcss에는 border-box,box-content
  const className = ["box-sizing", src && "bg-green-700", _className].join(" ");
  return <div {...props} className={className} style={style} />;
};
