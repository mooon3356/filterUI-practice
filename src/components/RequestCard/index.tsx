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
      <div className="header">
        <h1 className="card-title">{title}</h1>
        {status === "Consulting" ? (
          <strong className="status">Consulting</strong>
        ) : null}
      </div>
      <strong className="card-client">{client}</strong>
      <strong className="card-due">Due {due}</strong>
      <div className="divider"></div>
      <dl className="card-order-list">
        <div>
          <dt>Drawings</dt>
          <dt>Total quantity</dt>
          <dt>Method</dt>
          <dt>Material</dt>
        </div>
        <div>
          <dd>{count}</dd>
          <dd>{amount}</dd>
          <dd>{method.toString()}</dd>
          <dd>{material.toString()}</dd>
        </div>
      </dl>
      <div className="btn-box">
        <Button
          handler={() => alert("practice")}
          btnStyle="primary"
          size="medium"
        >
         Breakdown
        </Button>
        <Button
          handler={() => alert("practice")}
          btnStyle="outlined"
          size="small"
        >
          Chat
        </Button>
      </div>
    </Wrapper>
  );
}

export default RequestCard;
