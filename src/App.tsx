import { Route } from "react-router";
import Nav from "./components/Nav";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <>
      <Nav></Nav>
      <Route exact path="/" render={() => <DashboardPage />} />
    </>
  );
}

export default App;
