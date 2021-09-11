import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import useDashboard from "../hooks/useDashboard";
import RequestCardContainer from "../containers/RequestCardContainer";
import FilterContainer from "../containers/FilterContainer";
import PageIntro from "../components/PageIntro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const { data, onStoreData } = useDashboard();

  useEffect(() => {
    axios.get("http://localhost:4000/requests").then((data) => {
      onStoreData(data.data);
    });
  }, []);

  return (
    <Layout onClick={() => (isOpen ? setIsOpen(false) : null)}>
      {!data.currentData ? (
        <FontAwesomeIcon className="spin-icon" icon={faSpinner} spin />
      ) : (
        <Container>
          <PageIntro />
          <FilterContainer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modalType={modalType}
            setModalType={setModalType}
          ></FilterContainer>
          <RequestCardContainer></RequestCardContainer>
        </Container>
      )}
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

  .spin-icon {
    position: absolute;
    top: 45%;
    font-size: 5rem;
  }
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
    top: 5%;
    display: block;
  }
`;
