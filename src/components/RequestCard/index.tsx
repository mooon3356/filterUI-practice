import { Data } from "../../types/reducer";
import Button from "../Button";
import { Wrapper } from "./RequestCard.style";

function RequestCard({
  title,
  client,
  due,
  count,
  amount,
  method,
  material,
  status,
}: Data) {
  return (
    <Wrapper>
      {status === "상담중" ? <span className="status">상담중</span> : null}
      <div className="card-title">{title}</div>
      <div className="card-client">{client}</div>
      <div className="card-due">{due}까지 납기</div>
      <div className="divider"></div>
      <div className="card-info container">
        <div className="card-info box">
          <span className="card-info">도면개수</span>
          <span className="card-info">총 수량</span>
          <span className="card-info">가공방식</span>
          <span className="card-info">재료</span>
        </div>
        <div className="card-info box">
          <span className="card-info value">{count}</span>
          <span className="card-info value">{amount}</span>
          <span className="card-info value">{method.toString()}</span>
          <span className="card-info value">{material.toString()}</span>
        </div>
      </div>
      <div>
        <Button
          handler={() => alert("구현 예정입니다.")}
          className="btn"
          color="primary"
          size="medium"
        >
          요청 내역 보기
        </Button>
        <Button
          handler={() => alert("구현 예정입니다.")}
          className="btn"
          color="white"
          size="small"
        >
          채팅하기
        </Button>
      </div>
    </Wrapper>
  );
}

export default RequestCard;
