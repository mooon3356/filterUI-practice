import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  background: ${(props) => props.theme.primary[700]};

  h1 {
    color: #eeeeee;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .logout-btn {
    border: none;
    background: none;
    color: white;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    height: 3.5rem;
  }
`;
