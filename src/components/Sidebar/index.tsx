import { logo2, vector2 } from "../../images";
import { Wrapper } from "./Sidebar.style";

function Sidebar() {
  return (
    <Wrapper className="side">
      <div className="logo-box">
        <img className="side-logo" src={logo2}></img>
      </div>
      <div className="bottom-box">
        <div className="vector-box">
          <img className="side-vector" src={vector2}></img>
          <span className="side-text">파트너정밀가공</span>
        </div>
        <div className="side-text side-logout">로그아웃</div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
