import { ButtonProps } from "./index";
import styled, { css } from "styled-components";

type SizeType = Pick<ButtonProps, "size">;
type ColorType = Pick<ButtonProps, "color">;

const sizeStyles = css<SizeType>`
  ${({ size }) =>
    size === "small" &&
    css`
      width: 10.8rem;
      height: 3.2rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      width: 8rem;
      height: 3.2rem;
    `}
`;

const colorStyles = css<ColorType>`
  ${({ color }) =>
    color === "primary" &&
    css`
      background: ${(props) => props.theme.primary[500]};
      color: ${(props) => props.theme.gray.light};
      border: none;
    `}

  ${({ color }) =>
    color === "white" &&
    css`
      background: ${(props) => props.theme.gray.light};
      color: ${(props) => props.theme.primary[500]};
      border: 1px solid ${(props) => props.theme.primary[500]};
    `}
`;

export const Wrapper = styled.button<ButtonProps>`
  border-radius: 4px;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  font-size: 1.4rem;
  cursor: pointer;

  ${sizeStyles};
  ${colorStyles};
`;
