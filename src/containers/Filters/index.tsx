import CheckList from "../../containers/CheckList";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import useDashboard from "../../hooks/useDashboard";
import Button from "../../components/Button";
import { reset } from "../../images";

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
  const { onCheckFilter, onStoreData, data } = useDashboard();
  const [checkedList, setCheckedList] = useState<CheckedListType>({
    method: {},
    material: {},
  });
  const { method, material } = checkedList;

  let methodCount = Object.keys(method).length;
  let materialCount = Object.keys(material).length;

  const handleCheck = (e: any) => {
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
    setCheckedList({method: {}, material: {}})
  };

  useEffect(() => {
    onCheckFilter({ ...method, ...material });
  }, [checkedList]);

  return (
    <Container>
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
        <Button handler={handleReset} size="medium" className="reset" color={"white"}>
          필터링 리셋
        </Button>
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

const Container = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;

  .filter {
    margin-right: 1rem;
  }

  .reset-box {
    margin-left: 1rem;
  }

  .reset-icon {
    width: 1rem;
  }

  .reset {
    border: none;
    width: 7rem;
    font-weight: normal;
  }
`;
