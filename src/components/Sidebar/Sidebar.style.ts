import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .logo-box {
    height: 3rem;
    padding: 2.5rem 2rem;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }

  .side-logo {
    width: 11rem;
  }

  .bottom-box {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 3rem 2rem;
    position: relative;
  }

  .vector-box {
    display: flex;
    align-items: center;
  }

  .side-vector {
    object-fit: cover;
    width: 2rem;
    margin-right: 1rem;
  }

  .side-text {
    font-size: 1.4rem;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
  }

  .side-logout {
    position: absolute;
    top: 7rem;
    left: 3rem;
  }
`;
