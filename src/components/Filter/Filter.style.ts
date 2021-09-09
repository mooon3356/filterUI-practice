import styled, { css } from "styled-components";
import { FilterProps } from "./index";

type SizeType = Pick<FilterProps, "size">;
type CheckedType = Pick<FilterProps, "checkedList">;

const checkedStypes = css<CheckedType>`
  ${(props) =>
    props.checkedList.length >= 2 &&
    css`
      background: ${props.theme.primary[700]};
      color: ${props.theme.gray.light};
      border: 1px solid ${props.theme.primary[700]}
    `}
`;

const sizeStyles = css<SizeType>`
  ${({ size }) =>
    size === "small" &&
    css`
      width: 7.6rem;
      height: 3.2rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      width: 9.8rem;
      height: 3.2rem;
    `}
`;

export const Wrapper = styled.button<FilterProps>`
  background: ${(props) => props.theme.gray.light};
  color: ${(props) => props.theme.gray.default};
  border: 1px solid ${(props) => props.theme.gray.sub};
  border-radius: 4px;

  ${sizeStyles};
  ${checkedStypes};
`;
