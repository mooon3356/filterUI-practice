import styled, { css } from "styled-components";
import { ModalProps } from "./index";

type ModalType = Pick<ModalProps, "type">;

const modalStyles = css<ModalType>`
  ${({ type }) =>
    type === "filter-material" &&
    css`
      width: 13rem;
      height: 16.4rem;
      top: 27%;
      left: 22.5%;
      border-radius: 4px;
    `}

  ${({ type }) =>
    type === "filter-method" &&
    css`
      width: 13rem;
      height: 8rem;
      top: 27%;
      left: 12.8%;
      border-radius: 4px;
    `}

    ${({ type }) =>
    type === "sidebar" &&
    css`
      width: 28rem;
      height: 100%;
    `}
`;

export const Wrapper = styled.div<ModalProps>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;


  .modal-overlay {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: ${(props) =>
      props.type === "filter-material" || "filter-method"
        ? null
        : "rgba(0, 0, 0, 0.6)"}

    backdrop-filter: ${(props) =>
      props.type === "filter-material" || "filter-method" ? null : "blur(3px);"}
`;

export const ModalBox = styled.div<ModalType>`
  ${modalStyles};

  position: absolute;
  padding: 1.5rem 0 0 1.5rem;
  background-color: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};
`;
