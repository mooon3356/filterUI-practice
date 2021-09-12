import { Data } from "../../types/reducer";
import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from 'axios';

export const DASHBOARD_GET = "dashboard/DASHBOARD_GET ";
export const DASHBOARD_GET_SUCCESS = "dashboard/DASHBOARD_GET_SUCCESS";
export const DASHBOARD_GET_ERROR = "dashboard/DASHBOARD_GET_ERROR";

export const getDashboardDataAsync = createAsyncAction(
  DASHBOARD_GET,
  DASHBOARD_GET_SUCCESS,
  DASHBOARD_GET_ERROR
)<undefined, Data[], AxiosError>();
