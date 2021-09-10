import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  font-size: 1.4rem;
  line-height: 2.3rem;
  width: 100%;
  height: 100%;
  padding: 1.3rem 1.5rem;
  border-radius: 4px;

  background: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};
  color: ${(props) => props.theme.gray.default};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary[500]};
  }

  .status {
    position: absolute;
    top: 1.4rem;
    right: 1rem;

    display: flex;
    align-items: center;
    border-radius: 1.2rem;
    padding: 0 0.8rem;
    font-size: 1.1rem;
    height: 1.8rem;
    border: 1px solid ${(props) => props.theme.orange.normal};
    color: ${(props) => props.theme.orange.normal};
  }

  .card-title {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.7rem;
  }

  .card-client {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .card-due {
    color: ${(props) => props.theme.gray.sub};
    margin-bottom: 1.3rem;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.border.gray};
  }

  .card-info.container {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
  }

  .card-info.box {
    display: flex;
    flex-direction: column;
    margin-right: 2.5rem;
  }

  .card-info {
    color: ${(props) => props.theme.gray.default};
    line-height: 2.4rem;
  }

  .card-info.value {
    font-weight: bold;
  }

  .btn {
    margin-top: 1rem;
    margin-right: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    line-height: 3rem;

    .card-info {
      line-height: 3rem;
    }
  }
`;
