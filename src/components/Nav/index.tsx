import { logo, vector } from "../../images";
import Modal from "../Modal";
import Sidebar from "../Sidebar";
import { Wrapper } from "./Nav.style";

type NavProps = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ sideBar, setSideBar }: NavProps) {
  return (
    <Wrapper>
      {sideBar ? (
        <Modal
          type="sidebar"
          isOpen={sideBar}
          handleModal={() => setSideBar(!sideBar)}
          component={<Sidebar></Sidebar>}
        ></Modal>
      ) : null}
      <span onClick={() => setSideBar(true)} className="side-bar">
        메뉴바
      </span>
      <img className="logo" src={logo}></img>
      <div className="right-box">
        <img className="vertor" src={vector}></img>
        <span className="client">A 가공 업체</span>
        <span className="divider"></span>
        <span className="logout" onClick={(() => alert('구현 예정입니다.'))}>로그아웃</span>
      </div>
    </Wrapper>
  );
}

export default Nav;
