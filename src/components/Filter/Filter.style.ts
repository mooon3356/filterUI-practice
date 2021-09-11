import styled, { css } from "styled-components";
import { FilterProps } from "../../types/components";

type SizeType = Pick<FilterProps, "size">;
type CheckedType = Pick<FilterProps, "checkedList">;

const checkedStypes = css<CheckedType>`
  ${(props) =>
    Object.keys(props.checkedList).length >= 1 &&
    css`
      background: ${props.theme.primary[700]};
      color: ${props.theme.gray.light};
      border: 1px solid ${props.theme.primary[700]};
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
  border: 1px solid ${(props) => props.theme.gray.sub};
  border-radius: 4px;
  cursor: pointer;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  ${sizeStyles};
  ${checkedStypes};

  .arrow-icon {
    width: 1rem;
    margin-left: 1rem;
  }
`;
