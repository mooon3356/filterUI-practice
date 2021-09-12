import styled from "styled-components";
import { CheckBoxProps } from "../../types/components";

function CheckBox({ el, checked, name, handleCheck }: CheckBoxProps) {
  return (
    <Wrapper>
      <label>
        <input
          onChange={(e) => {
            handleCheck(e);
          }}
          className="check"
          type="checkbox"
          name={name}
          value={el}
          defaultChecked={checked}
        />
        {el}
      </label>
    </Wrapper>
  );
}

export default CheckBox;

const Wrapper = styled.div`
  .check {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
