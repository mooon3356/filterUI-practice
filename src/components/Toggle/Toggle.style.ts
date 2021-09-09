import styled from "styled-components";
import { ToggleProps } from "./index";

export const Wrapper = styled.div<ToggleProps>`
  position: relative;
  display: flex;
  width: 3.5rem;
  height: 2rem;
  align-items: center;
  cursor: pointer;

  .circle {
    position: absolute;
    left: ${(props) => (!props.toggle ? "0%" : "53%")};
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 70%;
    background: #f5f5f5;
    transition: 0.25s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }

  .back {
    width: 100%;
    height: 70%;
    border-radius: 1rem;
    transition: 0.25s ease-in-out;
    background: ${(props) =>
      !props.toggle ? props.theme.gray.dark : props.theme.primary[700]};
  }
`;
