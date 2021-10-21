import styled from "styled-components";
import CheckBox from "../../components/CheckBox";
import { CheckedListType } from "../FilterContainer";

const methodList = ["Milling", "Shelf"];
const materialList = ["Aluminum", "Carbon steel", "Copper", "Alloy steel", "Steel"];

export type CheckBoxContainerProps = {
  type: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedList: CheckedListType;
};

function CheckBoxContainer({ ...props }: CheckBoxContainerProps) {
  const { checkedList, handleCheck } = props;

  if (props.type === "method") {
    return (
      <Wrapper {...props}>
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
      <Wrapper {...props}>
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

export default CheckBoxContainer;

const Wrapper = styled.div<CheckBoxContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: ${({ type }) => (type === "method" ? "-1rem" : "8.5rem")};
  z-index: 9999;
  width: 9rem;
  background: white;
  border: 1px solid ${({ theme }) => theme.gray.dark};
  border-radius: 3px;
}
`;
