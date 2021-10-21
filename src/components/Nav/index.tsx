import { Wrapper } from "./Nav.style";

export type NavProps = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav() {
  return (
    <Wrapper>
      <h1>Filter Toy Project</h1>
      <button className="logout-btn" onClick={(() => alert('This is for practice'))}>Logout</button>
    </Wrapper>
  );
}

export default Nav;
