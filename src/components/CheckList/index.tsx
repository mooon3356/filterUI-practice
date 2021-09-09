import styled from "styled-components";

type CheckListProps = {
  type: string;
};

function CheckList({ type }: CheckListProps) {
  if (type === "method") {
    return (
      <Wrapper>
        <label>
          <input className="check" type="checkbox" value="밀링"/>
          밀링
        </label>
        <label>
          <input className="check" type="checkbox" value="선반" />
          선반
        </label>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <label>
          <input className="check" type="checkbox" value="알루미늄" />
          알루미늄
        </label>
        <label>
          <input className="check" type="checkbox" value="탄소강" />
          탄소강
        </label>
        <label>
          <input className="check" type="checkbox" value="구리" />
          구리
        </label>
        <label>
          <input className="check" type="checkbox" value="합금강" />
          합금강
        </label>
        <label>
          <input className="check" type="checkbox" value="강철" />
          강철
        </label>
      </Wrapper>
    );
  }
}

export default CheckList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.5rem;

  .check {
    margin: 0 0.8rem 0.5rem 0;
  }
`;
