import { useEffect, useState } from "react";
import CheckBoxContainer from "../../containers/CheckBoxContainer";
import { Container } from "./FilterContainer.style";
import Modal from "../../components/Modal";
import Filter from "../../components/Filter";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import { reset } from "../../images";
import { FilterContainerProps } from "../../types/containers";
import { filterDashboardDataThunk } from "../../modules/dashboard";
import { useDispatch } from "react-redux";

export type CheckedListType = {
  method: {
    [key: string]: boolean;
  };
  material: {
    [key: string]: boolean;
  };
};

function FilterContainer({ modalState, setModalState }: FilterContainerProps) {
  const [functionType, setFunctionType] = useState("");
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
    setFunctionType("check");
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
  };

  const handleReset = () => {
    setFunctionType("reset");
    setCheckedList({ method: {}, material: {} });
    setModalState({ method: false, material: false });
  };

  const handleToggle = () => {
    setFunctionType("toggle");
    setToggle(!toggle);
    setModalState({ material: false, method: false });
  };

  useEffect(() => {
    dispatch(
      filterDashboardDataThunk("check", toggle, { ...method, ...material })
    );
  }, [checkedList]);

  useEffect(() => {
    if (functionType === "check" || !functionType) return;

    if (toggle) {
      dispatch(
        filterDashboardDataThunk("toggle", toggle, {
          ...method,
          ...material,
        })
      );
    } else {
      dispatch(
        filterDashboardDataThunk("toggle", toggle, {
          ...method,
          ...material,
        })
      );
    }
  }, [toggle]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <div className="check-filters">
        <Filter
          className="filter"
          size="medium"
          handler={() => {
            setModalState({ ...modalState, method: !modalState.method });
          }}
          checkedList={checkedList.method}
          component={
            <span>
              가공방식
              {methodCount >= 1 && `(${methodCount})`}
            </span>
          }
        ></Filter>
        <Filter
          className="filter"
          size="small"
          handler={() => {
            setModalState({ ...modalState, material: !modalState.material });
          }}
          checkedList={checkedList.material}
          component={
            <span>
              재료
              {materialCount >= 1 && `(${materialCount})`}
            </span>
          }
        ></Filter>
        <div className="reset-box">
          <img className="reset-icon" src={reset}></img>
          <Button
            handler={handleReset}
            size="medium"
            className="reset"
            color={"white"}
          >
            필터링 리셋
          </Button>
        </div>
      </div>
      <div className="toggle-box">
        <Toggle toggle={toggle} handleToggle={handleToggle}></Toggle>
        <div className="toggle-title">상담 중인 요청만 보기</div>
      </div>

      <Modal
        type="filter-method"
        isOpen={modalState.method}
        handleModal={() =>
          setModalState({ ...modalState, method: !modalState.method })
        }
        component={
          <CheckBoxContainer
            checkedList={checkedList}
            type="method"
            handleCheck={handleCheck}
          ></CheckBoxContainer>
        }
      ></Modal>
      <Modal
        type="filter-material"
        isOpen={modalState.material}
        handleModal={() =>
          setModalState({ ...modalState, material: !modalState.material })
        }
        component={
          <CheckBoxContainer
            checkedList={checkedList}
            type="meterial"
            handleCheck={handleCheck}
          ></CheckBoxContainer>
        }
      ></Modal>
    </Container>
  );
}

export default FilterContainer;
