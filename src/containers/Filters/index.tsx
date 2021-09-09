import Button from "../../components/Button";
import CheckList from "../../components/CheckList";
import Modal from "../../components/Modal";
import styled from "styled-components";

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

  return (
    <Container>
      <Button
        className="filter-btn method"
        handler={() => {
          setIsOpen(!isOpen);
          setModalType("method");
        }}
      >
        가공방식
      </Button>
      <Button
        className="filter-btn material"
        handler={() => {
          setIsOpen(!isOpen);
          setModalType("material");
        }}
      >
        재료
      </Button>

      {isOpen ? (
        modalType === "method" ? (
          <Modal
            type="filter-method"
            isOpen={isOpen}
            handleModal={() => setIsOpen(!isOpen)}
            component={<CheckList type="method"></CheckList>}
          ></Modal>
        ) : (
          <Modal
            type="filter-material"
            isOpen={isOpen}
            handleModal={() => setIsOpen(!isOpen)}
            component={<CheckList type="meterial"></CheckList>}
          ></Modal>
        )
      ) : null}
    </Container>
  );
}

export default FiltersContainer;

const Container = styled.div`
  width: 70%;

  .filter-btn {
    background: ${(props) => props.theme.gray.light};
    color: ${(props) => props.theme.gray.default};
    border: 1px solid ${(props) => props.theme.gray.sub};
    border-radius: 4px;
    width: 9.8rem;
    height: 3.2rem;
  }

  .filter-btn.material {
    margin-left: 1rem;
    width: 7.6rem;
  }
`;