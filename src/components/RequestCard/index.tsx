import { Data } from "../../types/reducer";
import styled from "styled-components";
import Button from "../Button";

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
        <Button className="btn" color="primary" size="medium">
          요청 내역 보기
        </Button>
        <Button className="btn" color="white" size="small">
          채팅하기
        </Button>
      </div>
    </Wrapper>
  );
}

export default RequestCard;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 22rem;
  height: 21rem;
  border-radius: 4px;
  padding: 1rem 1rem;
  background: ${(props) => props.theme.gray.light};
  border: 1px solid ${(props) => props.theme.border.gray};
  color: ${(props) => props.theme.gray.default};
  font-size: 0.9rem;
  line-height: 1.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary[500]};
  }

  .status {
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    
    display: flex;
    align-items: center;
    border-radius: 1.2rem;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    height: 1.6rem;
    border: 1px solid ${(props) => props.theme.orange.normal};
    color: ${(props) => props.theme.orange.normal};
  }

  .card-title {
    font-weight: bold;
    font-size: 1rem;
    line-height: 2.4rem;
  }

  .card-client {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .card-due {
    color: ${(props) => props.theme.gray.sub};
    margin-bottom: 0.5rem;
  }

  .card-info.container {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
  }

  .card-info.box {
    display: flex;
    flex-direction: column;
    margin-right: 2.5rem;
  }

  .card-info {
    color: ${(props) => props.theme.gray.default};
  }

  .card-info.value {
    font-weight: bold;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.border.gray};
  }

  .btn {
    margin-right: 1rem;
  }
`;
