import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";
import { useState } from "react";
import FiltersContainer from "../containers/Filters";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <Container>
      <FiltersContainer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalType={modalType}
        setModalType={setModalType}
        ></FiltersContainer>
        <RequestCardList></RequestCardList>
    </Container>
  );
}

export default DashboardPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
`;
