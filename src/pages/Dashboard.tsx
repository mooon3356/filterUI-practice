import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";
import { useState } from "react";
import FiltersContainer from "../containers/Filters";
import PageIntro from "../components/PageIntro";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <Layout>
      <Container>
        <PageIntro />
        <FiltersContainer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalType={modalType}
          setModalType={setModalType}
        ></FiltersContainer>
        <RequestCardList></RequestCardList>
      </Container>
    </Layout>
  );
}

export default DashboardPage;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;
