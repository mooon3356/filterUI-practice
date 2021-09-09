import CheckList from "../../containers/CheckList";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import Filter from "../../components/Filter";

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
  const [checkedList, setCheckedList] = useState({
    method: [""],
    material: [""],
  });
  const { method, material } = checkedList;

  const handleCheck = (e: any) => {
    const type = e.target.name;
    const value = e.target.value;

    if (method.includes(value)) {
      const filtered = method.filter((el) => el !== value);
      setCheckedList({ ...checkedList, method: filtered });
      return;
    }

    if (material.includes(value)) {
      const filtered = material.filter((el) => el !== value);
      setCheckedList({ ...checkedList, material: filtered });
      return;
    }

    if (type === "method") {
      setCheckedList({ ...checkedList, method: [...method, value] });
    } else if (type === "material") {
      setCheckedList({ ...checkedList, material: [...material, value] });
    }
  };

  console.log(method);

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
            {checkedList.method.length >= 2 &&
              `(${checkedList.method.length - 1})`}
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
            {checkedList.material.length >= 2 &&
              `(${checkedList.material.length - 1})`}
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
