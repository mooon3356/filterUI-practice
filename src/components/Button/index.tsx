import { MouseEventHandler } from "react";
import { Wrapper } from "./Button.style";

export type ButtonProps = {
  children?: string;
  handler?: MouseEventHandler<HTMLButtonElement> | undefined;
  size?: "small" | "medium";
  color?: "primary" | "white";
};

function Button({
  children,
  handler,
  size = "small",
  color = "primary",
}: ButtonProps) {
  return (
    <Wrapper color={color} size={size} onClick={handler}>
      {children}
    </Wrapper>
  );
}

export default Button;
