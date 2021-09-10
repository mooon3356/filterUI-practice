import { useState } from "react";
import { Route } from "react-router";
import Nav from "./components/Nav";
import DashboardPage from "./pages/Dashboard";

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Nav sideBar={sideBar} setSideBar={setSideBar}></Nav>
      <Route exact path="/" render={() => <DashboardPage />} />
    </>
  );
}

export default App;
