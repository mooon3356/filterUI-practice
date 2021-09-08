import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="filter-box">
        <Button
          className="filter-btn method"
          handler={() => setIsOpen(!isOpen)}
        >
          가공방식
        </Button>
        <Button
          className="filter-btn material"
          handler={() => setIsOpen(!isOpen)}
        >
          재료
        </Button>
      </div>
      <RequestCardList></RequestCardList>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          handleModal={() => setIsOpen(!isOpen)}
          component={<div>hello</div>}
        ></Modal>
      ) : null}
    </Container>
  );
}

export default DashboardPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  padding-top: 7rem;

  .filter-box {
    width: 70%;
  }

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
