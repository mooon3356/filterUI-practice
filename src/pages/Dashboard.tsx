import Nav from "../components/Nav";
import styled from "styled-components";
import RequestCardList from "../containers/RequestCardList";

function DashboardPage() {
  return (
    <Container>
      <Nav></Nav>
      <RequestCardList></RequestCardList>
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
