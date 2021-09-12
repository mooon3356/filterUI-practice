import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/index";
import { getDashboardDataAsync } from "./actions";
import { getDashboardData } from "../../api/dashboard";
import { DashboardAction } from "./types";

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
    } catch (error:any) {
      dispatch(failure(error));
    }
  };
}
