import CheckList from "../../containers/CheckList";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import useDashboard from "../../hooks/useDashboard";

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

  useEffect(() => {
    if (methodCount !== 0 || materialCount !== 0) {
      onCheckFilter({ ...method, ...material });
      console.log('filter 디스패치 실행')
    }
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
  width: 70%;

  .filter {
    margin-right: 1rem;
  }
`;
