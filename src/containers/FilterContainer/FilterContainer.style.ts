import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .filter {
    margin-right: 1rem;
  }

  .reset-box {
    z-index: 99;
    margin-left: 1rem;
  }

  .reset-icon {
    width: 1rem;
  }

  .reset {
    border: none;
    width: 7rem;
    font-weight: normal;
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
    font-size: 1.3rem;
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
