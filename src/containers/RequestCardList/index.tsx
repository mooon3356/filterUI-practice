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

  let test = data.data

  let selected = ['알류미늄', '다이아몬드']

  console.log(test)

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

export default RequestCardList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 3rem;
`;
