import styled, { css, keyframes } from "styled-components";
import { slideLeft } from "../../styles/animation";
import { ModalProps } from "./index";

type ModalType = Pick<ModalProps, "type">;

const modalStyles = css<ModalType>`
  ${({ type }) =>
    type === "filter-method" &&
    css`
      width: 13rem;
      height: 8rem;
      top: 3.7rem;
      left: -3rem;
      border-radius: 4px;

      @media ${({ theme }) => theme.device.mobile} {
        top: 6rem;
        left: -3.1rem;
      }
    `}

  ${({ type }) =>
    type === "filter-material" &&
    css`
      width: 13rem;
      height: 16.4rem;
      top: 3.7rem;
      left: 10.7rem;
      border-radius: 4px;

      @media ${({ theme }) => theme.device.mobile} {
        top: 6rem;
        left: 10.8rem;
      }
    `}

    ${({ type }) =>
    type === "sidebar" &&
    css`
      width: 75%;
      height: 100%;
      left: 0;
      animation-duration: 0.5s;
      animation-name: ${slideLeft};
    `}
`;

export const Wrapper = styled.div<ModalProps>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  position: ${(props) => (props.type === "sidebar" ? "fixed" : "absolute")};
  background: ${(props) =>
    props.type === "sidebar" ? "rgba(0, 0, 0, 0.6)" : null};
  backdrop-filter: ${(props) =>
    props.type === "sidebar" ? "blur(3px)" : null};
`;

export const ModalBox = styled.div<ModalType>`
  ${modalStyles};

  position: absolute;
  padding: ${(props) =>
    props.type === "sidebar" ? null : "1.5rem 0 0 1.5rem;"};
  background-color: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};
`;
