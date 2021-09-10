import { useEffect } from "react";
import styled from "styled-components";
import useDashboard from "../../hooks/useDashboard";
import axios from "axios";
import RequestCard from "../../components/RequestCard";

function RequestCardList() {
  const { data, onStoreData } = useDashboard();

  useEffect(() => {
    axios.get("http://localhost:4000/requests").then((data) => {
      onStoreData(data.data);
    });
  }, []);

  if (!data.currentData) {
    return <div>로딩 중입니다.</div>;
  } else {
    return (
      <Container>
        {data.currentData.length === 0 ? (
          <div>없음</div>
        ) : (
          data.currentData.map((el) => (
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
          ))
        )}
      </Container>
    );
  }
}

export default RequestCardList;

const Container = styled.div`
  gap: 2rem 2rem;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid black;
  justify-content: center;
`;
