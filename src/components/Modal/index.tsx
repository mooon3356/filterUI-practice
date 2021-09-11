import { ModalProps } from "../../types/components";
import { ModalBox, Wrapper } from "./Modal.style";

function Modal({ isOpen = false, component, handleModal, type }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Wrapper isOpen={isOpen} type={type} onClick={handleModal}>
      <ModalBox type={type} onClick={(e) => e.stopPropagation()}>
        {component}
      </ModalBox>
    </Wrapper>
  );
}

export default Modal;
