type CheckBoxProps = {
  el: string;
  checked: boolean;
  name: string;
  handleCheck: (e: any) => void;
};

function CheckBox({ el, checked, name, handleCheck }: CheckBoxProps) {
  if (checked) {
    return (
      <label>
        <input
          onChange={(e) => {
            handleCheck(e);
            e.stopPropagation();
          }}
          className="check"
          type="checkbox"
          name={name}
          value={el}
          defaultChecked
        />
        {el}
      </label>
    );
  } else {
    return (
      <label>
        <input
          onChange={(e) => {
            handleCheck(e);
            e.stopPropagation();
          }}
          className="check"
          type="checkbox"
          name={name}
          value={el}
        />
        {el}
      </label>
    );
  }
}

export default CheckBox;
