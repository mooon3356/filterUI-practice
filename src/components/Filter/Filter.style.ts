import styled, { css } from "styled-components";
import { FilterProps, CheckedType } from ".";

const checkedStyles = css<CheckedType>`
  ${(props) =>
    Object.keys(props.checkedList).length >= 1 &&
    css`
      background: ${props.theme.primary[700]};
      color: ${props.theme.gray.light};
      border: 1px solid ${props.theme.primary[700]};
    `}
`;

// const sizeStyles = css<SizeType>`
//   ${({ size }) =>
//     size === "small" &&
//     css`
//       width: 7rem;
//       height: 2.5rem;
//     `}

//   ${({ size }) =>
//     size === "medium" &&
//     css`
//       width: 8rem;
//       height: 2.5rem;
//     `}
// `;

export const Wrapper = styled.button<FilterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  width: 8rem;
  height: 2.5rem;
  background: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.gray.sub};
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;

  ${checkedStyles};

  .arrow-icon {
    width: 1rem;
    margin-left: 1rem;
  }
`;
