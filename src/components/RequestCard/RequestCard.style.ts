import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 31.5%;
  position: relative;
  padding: 1rem 1.2rem;
  margin: 0.5rem;
  border-radius: 4px;
  background: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};

  &:hover {
    border: 1px solid ${(props) => props.theme.primary[500]};
  }

  strong {
    font-weight: normal;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    display: inline;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .status {
    display: flex;
    align-items: center;
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
    border: 1px solid ${(props) => props.theme.orange.normal};
    border-radius: 1rem;
    color: ${(props) => props.theme.orange.normal};
  }

  .card-client {
    margin-bottom: 1rem;
  }

  .card-due {
    color: ${(props) => props.theme.gray.sub};
    margin-bottom: 1rem;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.border.gray};
  }

  .card-order-list {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
  }

  .card-order-list > div:nth-child(1) {
    flex-grow: 1;
  }

  .card-order-list > div:nth-child(2) {
    flex-grow: 2;
    text-align: start;
  }

  .card-order-list dt,
  dd {
    margin-bottom: 0.6rem;
  }

  .card-order-list > dd {
    font-weight: bold;
  }

  .btn-box {
    display: flex;
  }

  .btn-box button {
    margin-right: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-grow: 1;
  }
`;
