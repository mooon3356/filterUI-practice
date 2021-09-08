import axios from "axios";
import { useEffect } from "react";
import RequestCard from "../components/RequestCard";
// import Button from "../components/Button";
// import Nav from "../components/Nav";
import useDashboard from "../hooks/useDashboard";
import styled from "styled-components";
import { Data } from "../types/reducer";

function DashboardPage() {
  const { data, onStoreData } = useDashboard();

  useEffect(() => {
    axios.get("http://localhost:4000/requests").then((data) => {
      onStoreData(data.data);
    });
  }, []);

  if (!data.data) {
    return <div>없음</div>;
  } else {
    return (
      <Container>
        {data.data.map((el) => (
          <RequestCard
            key={el.id}
            id={el.id}
            title={el.title}
            client={el.client}
            due={el.due}
            count={el.count}
            amount={el.amount}
            method={el.method}
            material={el.material}
            status={el.status}
          ></RequestCard>
        ))}
      </Container>
    );
  }
}

export default DashboardPage;

const Container = styled.div`
`;
