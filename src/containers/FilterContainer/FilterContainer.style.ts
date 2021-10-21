import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 70%;

  .filter {
    margin-right: 0.5rem;
  }

  .reset-box {
    z-index: 99;
    margin-left: 1rem;
  }

  .reset-icon {
    width: 0.8rem;
  }

  .reset {
    width: 4rem;
    border: none;
  }

  .check-filters {
    display: flex;
  }

  .toggle-box {
    display: flex;
    align-items: center;
  }

  .toggle-title {
    padding-left: 1rem;
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    .reset-box {
      display: none;
    }

    .check-filters {
      width: 100%;
      margin-bottom: 2rem;
    }

    .toggle-box {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;

    .reset-box {
      display: none;
    }

    .check-filters {
      width: 100%;
      margin-bottom: 2rem;
    }

    .toggle-box {
      width: 100%;
    }
  }
`;
