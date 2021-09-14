import styled from "styled-components";
import RequestCard from "../../components/RequestCard";
import EmptyBox from "../../components/EmptyBox";
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';

function RequestCardContainer() {
  const { data, loading, error } = useSelector((state: RootState) => state.dashboard.data);

  if (!data) {
    return <></>;
  } else {
    return (
      <>
        {data.length === 0 ? (
          <Container empty={true}>
            <EmptyBox/>
          </Container>
        ) : (
          <Container empty={false}>
            {data.map((el) => (
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
        )}
      </>
    );
  }
}

export default RequestCardContainer;

const Container = styled.div<{ empty: boolean }>`
  gap: 1.5rem 1.5rem;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.empty ? "block" : "grid")};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  };
  
  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
  };

`;
