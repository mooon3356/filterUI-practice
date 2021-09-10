import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";
import { useEffect, useState } from "react";
import FiltersContainer from "../containers/Filters";
import PageIntro from "../components/PageIntro";
import useDashboard from "../hooks/useDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
    <Layout>
      {!data.currentData ? (
        <FontAwesomeIcon className="spin-icon" icon={faSpinner} spin />
      ) : (
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
