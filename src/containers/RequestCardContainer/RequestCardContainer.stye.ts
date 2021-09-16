import styled from "styled-components";

export const Container = styled.div<{ empty: boolean }>`
display: ${(props) => (props.empty ? "block" : "grid")};
grid-template-columns: repeat(3, 1fr);
justify-content: center;
gap: 1.5rem 1.5rem;
width: 100%;
height: 100%;
margin: 2rem 0 1rem 0;

.skeleton-card {
  width: 100%;
  height: calc(100vh / 3);
  padding: 1.3rem 1.5rem;
  background: #eeeeee;
  border: 1px solid #e0e0e0;
  border-radius: 1.2rem;
}

.end {
  border: 1px solid black;
}

@media ${({ theme }) => theme.device.tablet} {
  grid-template-columns: repeat(2, 1fr);
}

@media ${({ theme }) => theme.device.mobile} {
  grid-template-columns: 1fr;
} ;
`;
