import { Component, ReactElement } from "react";
import { ModalBox, Wrapper } from "./Modal.style";

export type ModalProps = {
  isOpen: boolean;
  handleModal: () => void;
  component?: Component | ReactElement;
};

function Modal({ isOpen = false, component, handleModal }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Wrapper onClick={handleModal}>
      <div className="modal-overlay"></div>
      <ModalBox onClick={(e) => e.stopPropagation()}>{component}</ModalBox>
    </Wrapper>
  );
}

export default Modal;
