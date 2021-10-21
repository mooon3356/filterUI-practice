import styled from "styled-components";

function PageIntro() {
  return (
    <Wrapper>
      <h1>Requests</h1>
      <h2>Find requests you have received from your partners. </h2>
    </Wrapper>
  );
}

export default PageIntro;

const Wrapper = styled.header`
  width: 70%;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 13%;
  }
`;
