import { Route } from "react-router";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <DashboardPage />} />
    </>
  );
}

export default App;
