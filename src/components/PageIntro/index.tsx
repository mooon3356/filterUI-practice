import styled from "styled-components";

function PageIntro() {
  return (
    <Wrapper>
      <h1>들어온 요청</h1>
      <div className="description">
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
    </Wrapper>
  );
}

export default PageIntro;

const Wrapper = styled.div`
  width: 100%;
  height: 16%;

  .description {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 13%;
  }
`;
