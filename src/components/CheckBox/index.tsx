import styled from "styled-components";

export type CheckBoxProps = {
  el: string;
  checked: boolean;
  name: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckBox({ el, checked, name, handleCheck }: CheckBoxProps) {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <input
        onChange={(e) => {
          handleCheck(e);
        }}
        id={`check${el}`}
        type="checkbox"
        name={name}
        value={el}
        defaultChecked={checked}
      />
      <label htmlFor={`check${el}`}>{el}</label>
    </Wrapper>
  );
}

export default CheckBox;

const Wrapper = styled.div`
  padding: 0.6rem 1rem;

  input {
    margin-right: 0.7rem;
    cursor: pointer;
  }

  label {
    font-size: 0.9rem;
  }
`;
