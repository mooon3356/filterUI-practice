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

  if (!data.checkedData) {
    return <div>로딩 중입니다.</div>;
  } else {
    return (
      <Container>
        {data.checkedData.length === 0 ? (
          <div>없음</div>
        ) : (
          data.checkedData.map((el) => (
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
  gap: 1.5rem 1.5rem;
  margin-top: 2rem;
  width: 60%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
