import axios from "axios";
import { useEffect } from "react";
// import Button from "../components/Button";
// import Nav from "../components/Nav";
import useDashboard from "../hooks/useDashboard";

function DashboardPage() {
  const { data, onStoreData } = useDashboard();

  useEffect(() => {
    axios.get("http://localhost:4000/requests").then((data) => {
      onStoreData(data.data);
    });
  }, []);

  console.log(data);

  return <div></div>;
}

export default DashboardPage;
