import styled from "styled-components";
import CheckBox from "../../components/CheckBox";
import { CheckedListType } from "../Filters";

const methodList = ["밀링", "선반"];
const materialList = ["알루미늄", "탄소강", "구리", "합금강", "강철F"];

type CheckListProps = {
  type: string;
  handleCheck: (e: any) => void;
  checkedList: CheckedListType;
};

function CheckList({ type, handleCheck, checkedList }: CheckListProps) {
  if (type === "method") {
    return (
      <Wrapper onClick={handleCheck}>
        {methodList.map((el, idx) =>
          checkedList.method[el] ? (
            <CheckBox
              handleCheck={handleCheck}
              key={idx + 1}
              el={el}
              checked={true}
              name="method"
            ></CheckBox>
          ) : (
            <CheckBox
              handleCheck={handleCheck}
              key={idx + 1}
              el={el}
              checked={false}
              name="method"
            ></CheckBox>
          )
        )}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {materialList.map((el, idx) =>
          checkedList.material[el] ? (
            <CheckBox
              handleCheck={handleCheck}
              key={idx + 1}
              el={el}
              checked={true}
              name="material"
            ></CheckBox>
          ) : (
            <CheckBox
              handleCheck={handleCheck}
              key={idx + 1}
              el={el}
              checked={false}
              name="material"
            ></CheckBox>
          )
        )}
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
