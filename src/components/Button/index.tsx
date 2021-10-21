import { Wrapper } from "./Button.style";
import { MouseEventHandler } from "react";

export type ButtonProps = {
  children?: string;
  handler?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size: "small" | "medium";
  btnStyle: "primary" | "outlined";
};

function Button({
  children,
  handler,
  size = "small",
  btnStyle = "primary",
  className,
}: ButtonProps) {
  return (
    <Wrapper
      className={className}
      btnStyle={btnStyle}
      size={size}
      onClick={handler}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
