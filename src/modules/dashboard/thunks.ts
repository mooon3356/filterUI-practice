import { RootState } from "./../reducers/index";
import { ThunkAction } from "redux-thunk";
import { getDashboardDataAsync, filterDashboardDataAsync } from "./actions";
import { getDashboardData } from "../../api/dashboard";
import { DashboardAction } from "./types";
import { useSelector } from "react-redux";

export function getDashboardDataThunk(): ThunkAction<
  void,
  RootState,
  null,
  DashboardAction
> {
  return async (dispatch) => {
    const { request, success, failure } = getDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
      dispatch(success(dashboardData));
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}

export function filterDashboardDataThunk(
  type: string
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
      if (type === "toggle-on") {
        const consultingData = dashboardData.filter((el) => {
          return el.status === "상담중";
        });
        dispatch(success(consultingData));
      } else if (type === "toggle-off") {
        dispatch(success(dashboardData));
      }
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}
