import styled from "styled-components";
import { useState } from "react";
import RequestCardContainer from "../containers/RequestCardContainer";
import FilterContainer from "../containers/FilterContainer";
import PageIntro from "../components/PageIntro";

export type ModalStateType = {
  method: boolean;
  material: boolean;
};

function DashboardPage() {
  const [modalState, setModalState] = useState<ModalStateType>({
    method: false,
    material: false,
  });

  return (
    <Layout
      onClick={() => {
        if (modalState.method || modalState.material) {
          setModalState({ method: false, material: false });
        }
      }}
    >
      <Container>
        <PageIntro />
        <FilterContainer
          modalState={modalState}
          setModalState={setModalState}
        />
        <RequestCardContainer />
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
  z-index: 9;
`;

const Container = styled.div`
  position: absolute;
  top: 8%;
  width: 70%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    display: block;
  }
`;
