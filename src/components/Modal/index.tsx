import { Component, ReactElement } from "react";
import { ModalBox, Wrapper } from "./Modal.style";

export type ModalProps = {
  isOpen: boolean;
  handleModal?: () => void;
  component?: Component | ReactElement;
  type?: string;
};

function Modal({ isOpen = false, component, handleModal, type }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Wrapper isOpen={isOpen} type={type} onClick={handleModal}>
      <div className="modal-overlay"></div>
      <ModalBox onClick={(e) => e.stopPropagation()}>{component}</ModalBox>
    </Wrapper>
  );
}

export default Modal;
