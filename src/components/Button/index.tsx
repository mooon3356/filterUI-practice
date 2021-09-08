import { MouseEventHandler } from "react";
import { Wrapper } from "./Button.style";

export type ButtonProps = {
  children?: string;
  handler?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  size?: "small" | "medium";
  color?: "primary" | "white";
};

function Button({
  children,
  handler,
  size = "small",
  color = "primary",
  className,
}: ButtonProps) {
  return (
    <Wrapper className={className} color={color} size={size} onClick={handler}>
      {children}
    </Wrapper>
  );
}

export default Button;
