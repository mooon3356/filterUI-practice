import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.primary[700]};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 999;

  .right-box {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .right-box > span {
    margin-right: 3rem;
  }

  .menu-icon {
    display: none;
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
    font-size: 1.3rem;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    height: 3.5rem;

    .menu-icon {
      display: inline-block;
      position: absolute;
      color: white;
      width: 1rem;
      top: 30%;
      left: 5%;
      z-index: 1;
    }

    .logo {
      width: 12.5rem;
      position: absolute;
      top: 30%;
      left: 4%;
    }

    .divider,
    .vertor,
    .client,
    .logout {
      display: none;
    }
  }
`;
