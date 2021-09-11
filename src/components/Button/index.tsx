import { ButtonProps } from '../../types/components';
import { Wrapper } from "./Button.style";

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
