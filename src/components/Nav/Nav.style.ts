import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 5rem;
  background: ${(props) => props.theme.primary[700]};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  .right-box {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .right-box > span {
    margin-right: 3rem;
  }

  .logo {
    padding-left: 3rem;
    width: 16rem;
  }

  .vertor {
    object-fit: cover;
    width: 2rem;
    margin-right: 1rem;
  }

  .client {
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2rem;
    color: ${(props) => props.theme.gray.light};
  }

  .divider {
    border: 1px solid ${(props) => props.theme.gray.light};
    height: 1.5rem;
  }

  .logout {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 20px;
    color: #ffffff;
  }
`;
