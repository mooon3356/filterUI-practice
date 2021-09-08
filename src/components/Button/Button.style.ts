import { ButtonProps } from "./index";
import styled, { css } from "styled-components";

type SizeType = Pick<ButtonProps, "size">;
type ColorType = Pick<ButtonProps, "color">;

const sizeStyles = css<SizeType>`
  ${({ size }) =>
    size === "small" &&
    css`
      width: 4.5rem;
      height: 2rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      width: 6rem;
      height: 2rem;
    `}
`;

const colorStyles = css<ColorType>`
  ${({ color }) =>
    color === "primary" &&
    css`
      background: ${(props) => props.theme.primary[500]};
      color: ${(props) => props.theme.gray.light};
      border: 1px solid ${(props) => props.theme.primary[500]};
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
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: 500;

  ${sizeStyles};
  ${colorStyles};
`;
