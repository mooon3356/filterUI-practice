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
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 6%;
  width: 70%;
  height: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    top: 20%;
  }
`;
