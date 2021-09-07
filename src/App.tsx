import { Route } from "react-router";
import DashboardPage from "./pages/Dashboard";
import "./styles/App.css";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <DashboardPage />} />
    </>
  );
}

export default App;
