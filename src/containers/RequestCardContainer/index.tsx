import RequestCard from "../../components/RequestCard";
import EmptyBox from "../../components/EmptyBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import { useEffect, useRef, useState } from "react";
import { getDashboardDataThunk } from "../../modules/dashboard";
import { Container } from "./RequestCardContainer.stye";
import { RequestCardContainerProps } from "../../types/containers";

function RequestCardContainer({
  itemIndex,
  setItemIndex,
}: RequestCardContainerProps) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.dashboard.data
  );
  const targetRef = useRef<HTMLDivElement>(null);
  const { start, end } = itemIndex;
  const [target, setTarget] = useState(false);

  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch(getDashboardDataThunk(start + 9, end + 9));
        setItemIndex({ start: start + 9, end: end + 9 });
      }
    });
  });

  useEffect(() => {
    console.log("get 요청 thunk 들어감");
    dispatch(getDashboardDataThunk(start, end));
    setTarget(true);
  }, []);

  useEffect(() => {
    if (target && targetRef.current) {
      intersectionObserver.observe(targetRef.current);
    }
  }, [data]);

  if (loading || error) {
    return (
      <Container empty={false}>
        {Array(6)
          .fill(0)
          .map((el, idx) => (
            <div key={idx + 1} className="skeleton-card"></div>
          ))}
      </Container>
    );
  } else if (data && data.length !== 0) {
    return (
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
        <div ref={targetRef}></div>
      </Container>
    );
  } else {
    return (
      <Container empty={true}>
        <EmptyBox></EmptyBox>
      </Container>
    );
  }
}

export default RequestCardContainer;
