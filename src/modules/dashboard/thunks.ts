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

export function filterDashboardDataThunk(
  type?: string,
  toggle?: boolean,
  checkedList?: { [key: string]: boolean }
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
      let consultingData = dashboardData.filter((el) => {
        return el.status === "상담중";
      });
      let checkedData = dashboardData.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in checkedList) {
          if (!fullList.includes(key)) return false;
        }
        return true;
      });
      let checkTargetData =
        type === "check" && toggle ? consultingData : dashboardData;

      if (type === "check") {
        checkedData = checkTargetData.filter((el) => {
          const fullList = [...el.method, ...el.material];
          for (let key in checkedList) {
            if (!fullList.includes(key)) return false;
          }
          return true;
        });
        dispatch(success(checkedData));
      } else {
        if (toggle) {
          if (checkedList) {
            consultingData = checkedData.filter((el) => {
              return el.status === "상담중";
            });
            dispatch(success(consultingData));
          } else {
            dispatch(success(dashboardData));
          }
        } else {
          if (checkedList && Object.keys(checkedList).length > 0) {
            dispatch(success(checkedData));
          } else {
            dispatch(success(dashboardData));
          }
        }
      }
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}
