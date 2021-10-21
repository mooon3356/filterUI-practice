import styled from "styled-components";

function EmptyBox() {
  return (
    <Wrapper>
      <strong>There is no request you are looking for.</strong>
    </Wrapper>
  );
}

export default EmptyBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  font-size: 1.2rem;
  border-radius: 4px;
  color: ${(props) => props.theme.gray.sub};
  border: 1px solid ${(props) => props.theme.border.gray};

  strong {
    font-weight: normal;
  }
`;
