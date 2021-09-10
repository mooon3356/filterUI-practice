import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid green;
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
`;
