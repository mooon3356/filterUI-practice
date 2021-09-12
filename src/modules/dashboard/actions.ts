import { Data } from "../../types/reducer";
import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const DASHBOARD_GET = "dashboard/DASHBOARD_GET ";
export const DASHBOARD_GET_SUCCESS = "dashboard/DASHBOARD_GET_SUCCESS";
export const DASHBOARD_GET_ERROR = "dashboard/DASHBOARD_GET_ERROR";

export const DASHBOARD_FILTER = "dashboard/DASHBOARD_FILTER ";
export const DASHBOARD_FILTER_SUCCESS = "dashboard/DASHBOARD_FILTER_SUCCESS";
export const DASHBOARD_FILTER_ERROR = "dashboard/DASHBOARD_FILTER_ERROR";

export const getDashboardDataAsync = createAsyncAction(
  DASHBOARD_GET,
  DASHBOARD_GET_SUCCESS,
  DASHBOARD_GET_ERROR
)<undefined, Data[], AxiosError>();

export const filterDashboardDataAsync = createAsyncAction(
  DASHBOARD_FILTER,
  DASHBOARD_FILTER_SUCCESS,
  DASHBOARD_FILTER_ERROR
)<undefined, Data[] | undefined, AxiosError>();
