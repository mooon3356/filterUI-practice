import styled from "styled-components";

export const Container = styled.ul<{ empty: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
  padding: 0;
  margin-left: 1rem;

  .skeleton-card {
    width: 100%;
    height: calc(100vh / 3);
    padding: 1.3rem 1.5rem;
    background: #eeeeee;
    border: 1px solid #e0e0e0;
    border-radius: 1.2rem;
  }
`;
