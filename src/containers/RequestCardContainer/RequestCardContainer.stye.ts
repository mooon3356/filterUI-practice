import styled from "styled-components";

export const Container = styled.ul<{ empty: boolean, type?: string }>`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
  padding: 0;
  margin-left: ${({type}) => type ? '4.3rem' : '1rem'};

  .skeleton-card {
    width: 30%;
    height: calc(100vh / 3);
    margin: 0.5rem;
    background: #eeeeee;
    border: 1px solid #e0e0e0;
    border-radius: 1.2rem;
  }
`;
