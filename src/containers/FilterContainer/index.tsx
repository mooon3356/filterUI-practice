import { useEffect, useState } from "react";
import { Container } from "./FilterContainer.style";
import Filter from "../../components/Filter";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import { reset } from "../../images";
import {
  checkFilterThunk,
  consultingFilterThunk,
} from "../../modules/dashboard";
import { useDispatch } from "react-redux";
import { checkBoxType } from "../../pages/Dashboard";
import CheckBoxContainer from "../CheckBoxContainer";

export type CheckedListType = {
  method: {
    [key: string]: boolean;
  };
  material: {
    [key: string]: boolean;
  };
};

export type FilterContainerProps = {
  checkBox: checkBoxType;
  setCheckBox: React.Dispatch<React.SetStateAction<checkBoxType>>;
};

function FilterContainer({ checkBox, setCheckBox }: FilterContainerProps) {
  const [toggle, setToggle] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckedListType>({
    method: {},
    material: {},
  });
  const { method, material } = checkedList;
  const dispatch = useDispatch();

  let methodCount = Object.keys(method).length;
  let materialCount = Object.keys(material).length;

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.name;
    const value = e.target.value;
    let newMethod = { ...method };
    let newMaterial = { ...material };

    if (method[value]) {
      delete newMethod[value];
      setCheckedList({ ...checkedList, method: newMethod });
      return;
    }
    if (material[value]) {
      delete newMaterial[value];
      setCheckedList({ ...checkedList, material: newMaterial });
      return;
    }
    if (type === "method") {
      newMethod[value] = true;
      setCheckedList({ ...checkedList, method: newMethod });
    } else if (type === "material") {
      newMaterial[value] = true;
      setCheckedList({ ...checkedList, material: newMaterial });
    }

    e.stopPropagation();
  };

  const handleReset = () => {
    setCheckedList({ method: {}, material: {} });
    setCheckBox({ method: false, material: false });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(checkFilterThunk(toggle, { ...method, ...material }));
  }, [checkedList]);

  useEffect(() => {
    dispatch(
      consultingFilterThunk(toggle, {
        ...method,
        ...material,
      })
    );
  }, [toggle]);

  return (
    <Container>
      <div className="check-filters">
        <Filter
          className="filter"
          // size="medium"
          checkedList={checkedList.method}
          handler={() => {
            setCheckBox({ ...checkBox, method: !checkBox.method });
          }}
          component={
            <span>
              Method
              {methodCount >= 1 && `(${methodCount})`}
            </span>
          }
        ></Filter>

        {checkBox.method ? (
          <CheckBoxContainer
            checkedList={checkedList}
            type="method"
            handleCheck={handleCheck}
          ></CheckBoxContainer>
        ) : null}

        <Filter
          className="filter"
          // size="small"
          checkedList={checkedList.material}
          handler={() =>
            setCheckBox({ ...checkBox, material: !checkBox.material })
          }
          component={
            <span>
              Material
              {materialCount >= 1 && `(${materialCount})`}
            </span>
          }
        ></Filter>

        {checkBox.material ? (
          <CheckBoxContainer
            checkedList={checkedList}
            type="meterial"
            handleCheck={handleCheck}
          ></CheckBoxContainer>
        ) : null}

        <div className="reset-box">
          <img className="reset-icon" src={reset}></img>
          <Button
            handler={handleReset}
            size="medium"
            className="reset"
            btnStyle={"outlined"}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="toggle-box">
        <Toggle toggle={toggle} handleToggle={handleToggle}></Toggle>
        <div className="toggle-title">Filter consulting requests</div>
      </div>
    </Container>
  );
}

export default FilterContainer;
