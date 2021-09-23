import RequestCard from "../../components/RequestCard";
import EmptyBox from "../../components/EmptyBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import { useEffect } from "react";
import { getDashboardDataThunk } from "../../modules/dashboard";
import { Container } from "./RequestCardContainer.stye";

function RequestCardContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.dashboard.data
  );

  useEffect(() => {
    dispatch(getDashboardDataThunk());
  }, []);

  if (loading || error) {
    return (
      <Container empty={false}>
        {Array(6).fill(0).map((el, idx) => (
          <div key={idx+1} className="skeleton-card"></div>
        ))}
      </Container>
    );
  } else {
    return (
      <>
        {data && data.length === 0 ? (
          <Container empty={true}>
            <EmptyBox />
          </Container>
        ) : (
          <Container empty={false}>
            {data &&
              data.map((el) => (
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
