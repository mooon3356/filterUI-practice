import { RootState } from "./../reducers/index";
import { ThunkAction } from "redux-thunk";
import { getDashboardDataAsync, filterDashboardDataAsync } from "./actions";
import { getDashboardData } from "../../api/dashboard";
import { DashboardAction } from "./types";
import createAsyncThunk from "../../utils/createAsyncThunk";

export const getDashboardDataThunk = createAsyncThunk(
  getDashboardDataAsync,
  getDashboardData
);

export function checkFilterThunk(
  toggle: boolean,
  checkedList: { [key: string]: boolean }
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
      const consultingData = dashboardData.filter((el) => {
        return el.status === "Consulting";
      });

      let checkTargetData = toggle ? consultingData : dashboardData;

      const checkedData = checkTargetData.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in checkedList) {
          if (!fullList.includes(key)) return false;
        }
        return true;
      });
      dispatch(success(checkedData));
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}

export function consultingFilterThunk(
  toggle: boolean,
  checkedList: { [key: string]: boolean }
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
      const checkedData = dashboardData.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in checkedList) {
          if (!fullList.includes(key)) return false;
        }
        return true;
      });

      const consultingTargetData =
        Object.keys(checkedList).length > 0 ? checkedData : dashboardData;
      const consultingData = consultingTargetData.filter((el) => {
        return el.status === "Consulting";
      });

      if (toggle) {
        dispatch(success(consultingData));
      } else {
        if (Object.keys(checkedData).length > 0) {
          dispatch(success(checkedData));
        } else {
          dispatch(success(dashboardData));
        }
      }
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}
