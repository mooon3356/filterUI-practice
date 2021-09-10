import styled, { css } from "styled-components";
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  .modal-overlay {
    width: 100vw;
    height: 100vh;
    position: ${(props) => (props.type === "sidebar" ? "fixed" : "absolute")};
    background: ${(props) =>
      props.type === "sidebar" ? "rgba(0, 0, 0, 0.5)" : null};
    backdrop-filter: ${(props) =>
      props.type === "sidebar" ? "blur(3px)" : null};
  }
`;

export const ModalBox = styled.div<ModalType>`
  ${modalStyles};

  position: absolute;
  padding: ${(props) =>
    props.type === "sidebar" ? null : "1.5rem 0 0 1.5rem;"};
  background-color: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};
`;
