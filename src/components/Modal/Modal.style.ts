import styled from "styled-components";

export const Wrapper = styled.div`
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
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  padding: 2.5rem;
  background-color: white;
  border: 1px solid #9e9e9e;
`;
