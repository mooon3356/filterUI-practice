import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const primaryButtonStyle = css`
  background: ${({ theme }) => theme.primary[500]};
  color: ${({ theme }) => theme.gray.light};
  border: none;
`;

const outlinedButtonStyle = css`
  background: white;
  color: ${({ theme }) => theme.primary[500]};
  border: 1px solid ${({ theme }) => theme.primary[500]};
`;

const sizeSmall = css`
  width: 5rem;
  height: 2.5rem;
`;

const sizeMedium = css`
  width: 7rem;
  height: 2.5rem;
`;

function setButtonStyle(btnStyle: string) {
  switch (btnStyle) {
    case "primary":
      return primaryButtonStyle;
    case "outlined":
      return outlinedButtonStyle;
  }
}

function setButtonSize(size: string) {
  switch (size) {
    case "small":
      return sizeSmall;
    case "medium":
      return sizeMedium;
  }
}

export const Wrapper = styled.button<ButtonProps>`
  z-index: 9999;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  ${({ btnStyle }) => setButtonStyle(btnStyle)};
  ${({ size }) => setButtonSize(size)};
`;
