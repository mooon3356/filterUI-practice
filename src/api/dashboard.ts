import axios from "axios";
import { Data } from "../types/reducer";

export async function getDashboardData() {
  const response = await axios.get<Data[]>("http://localhost:4000/requests");
  return response.data
}
