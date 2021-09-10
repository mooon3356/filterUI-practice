import styled from "styled-components";

type CheckBoxProps = {
  el: string;
  checked: boolean;
  name: string;
  handleCheck: (e: any) => void;
};

function CheckBox({ el, checked, name, handleCheck }: CheckBoxProps) {
  if (checked) {
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
            defaultChecked
          />
          {el}
        </label>
      </Wrapper>
    );
  } else {
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
          />
          {el}
        </label>
      </Wrapper>
    );
  }
}

export default CheckBox;

const Wrapper = styled.div`
  .check {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
