import { logo, vector } from "../../images";
import { Wrapper } from "./Nav.style";

function Nav() {
  return (
    <Wrapper>
      <img className="logo" src={logo}></img>
      <div className="right-box">
        <img className="vertor" src={vector}></img>
        <span className="client">A 가공 업체</span>
        <span className="divider"></span>
        <span className="logout">로그아웃</span>
      </div>
    </Wrapper>
  );
}

export default Nav;
