import styled from "styled-components";
import { ToggleProps } from ".";

export const Wrapper = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  width: 2.3rem;
  height: 1.3rem;
  cursor: pointer;

  .circle {
    position: absolute;
    left: ${(props) => (!props.toggle ? "0%" : "53%")};
    width: 1.2rem;
    height: 1.2rem;
    background: #f5f5f5;
    border-radius: 70%;
    transition: 0.25s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }

  .back {
    width: 100%;
    height: 70%;
    border-radius: 1rem;
    background: ${(props) =>
      !props.toggle ? props.theme.gray.dark : props.theme.primary[700]};
    transition: 0.25s ease-in-out;
  }

  @media ${({ theme }) => theme.device.mobile} {
    z-index: 9;
  }
`;
