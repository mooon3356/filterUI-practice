import CheckList from "../../containers/CheckList";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import useDashboard from "../../hooks/useDashboard";
import Button from "../../components/Button";
import { reset } from "../../images";
import Toggle from "../../components/Toggle";
import { Container } from "./Filters.style";

export type CheckedListType = {
  method: {
    [key: string]: boolean;
  };
  material: {
    [key: string]: boolean;
  };
};

type FiltersContainerType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
};

function FiltersContainer({
  isOpen,
  setIsOpen,
  modalType,
  setModalType,
}: FiltersContainerType) {
  const { onCheckFilter, onConsultingFilter } = useDashboard();
  const [functionType, setFunctionType] = useState("");
  const [toggle, setToggle] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckedListType>({
    method: {},
    material: {},
  });
  const { method, material } = checkedList;

  let methodCount = Object.keys(method).length;
  let materialCount = Object.keys(material).length;

  const handleCheck = (e: any) => {
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
    if (isOpen) setIsOpen(false);
    if (toggle) setToggle(false);
  };

  const handleToggle = () => {
    setFunctionType("toggle");
    setToggle(!toggle);
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    if (functionType === "toggle") return;
    if (toggle) setToggle(false);
    onCheckFilter({ ...method, ...material });
  }, [checkedList]);

  useEffect(() => {
    if (functionType === "check") return;
    if (methodCount === 0 && materialCount === 0) {
      onConsultingFilter(toggle);
    } else {
      setCheckedList({ method: {}, material: {} });
      onConsultingFilter(toggle);
    }
  }, [toggle]);

  return (
    <Container>
      <div className="check-filters">
        <Filter
          className="filter"
          size="medium"
          handler={() => {
            setIsOpen(!isOpen);
            setModalType("method");
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
            setIsOpen(!isOpen);
            setModalType("material");
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

      {isOpen ? (
        modalType === "method" ? (
          <Modal
            type="filter-method"
            isOpen={isOpen}
            handleModal={() => setIsOpen(!isOpen)}
            component={
              <CheckList
                checkedList={checkedList}
                type="method"
                handleCheck={handleCheck}
              ></CheckList>
            }
          ></Modal>
        ) : (
          <Modal
            type="filter-material"
            isOpen={isOpen}
            handleModal={() => setIsOpen(!isOpen)}
            component={
              <CheckList
                checkedList={checkedList}
                type="meterial"
                handleCheck={handleCheck}
              ></CheckList>
            }
          ></Modal>
        )
      ) : null}
    </Container>
  );
}

export default FiltersContainer;

// useEffect(() => {
//   toggle
//     ? onConsultingFilter(toggle)
//     : setCheckedList({ method: {}, material: {} });
//   if (isOpen) setIsOpen(false);
// }, [toggle]);
