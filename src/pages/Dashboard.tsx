import Nav from "../components/Nav";
import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";
import { useState } from "react";
import Modal from "../components/Modal";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)
  return (
    <Container>
      <Nav></Nav>
      <RequestCardList></RequestCardList>
      <button onClick={(() => setIsOpen(!isOpen))}>테스트</button>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          handleModal={() => {
            setIsOpen(!isOpen)
          }}
          component={<div>test</div>}
        />
      ) : null}
    </Container>
  );
}

export default DashboardPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
