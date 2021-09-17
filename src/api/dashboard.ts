import axios from "axios";
import { Data } from "../types/reducer";

export async function getDashboardData(start:number, end:number) {
  const response = await axios.get<Data[]>(`http://localhost:4000/requests?_start=${start}&_end=${end}`);
  return response.data
}
