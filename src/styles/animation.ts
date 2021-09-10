import { keyframes } from "styled-components";

export const slideLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-50rem)
}
100% {
  opacity: 1;
  transform: translateX(0rem)
}
`;
