import styled from "styled-components";

function EmptyBox() {
  return (
    <Wrapper>
      <div> 조건에 맞는 견적 요청이 없습니다.</div>
    </Wrapper>
  );
}

export default EmptyBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  font-size: 1.4rem;
  border-radius: 4px;
  color: ${(props) => props.theme.gray.sub};
  border: 1px solid ${(props) => props.theme.border.gray};
`;
