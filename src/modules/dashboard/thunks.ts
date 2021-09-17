import { RootState } from "./../reducers/index";
import { ThunkAction } from "redux-thunk";
import { getDashboardDataAsync, filterDashboardDataAsync } from "./actions";
import { getDashboardData } from "../../api/dashboard";
import { DashboardAction } from "./types";

export function getDashboardDataThunk(
  start: number,
  end: number
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = getDashboardDataAsync;
    console.log('get 액션 들어감')
    dispatch(request())
    try {
      console.log('get success 액션 들어감')
      const dashboardData = await getDashboardData(start, end);
      dispatch(success(dashboardData));
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}

export function filterDashboardDataThunk(
  end: number,
  type: string,
  checkedList?: { [key: string]: boolean }
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    console.log('여기 실행됨')
    dispatch(request());
    try {
      const dashboardData = await getDashboardData(0, end);
      const consultingData = dashboardData.filter((el) => {
        return el.status === "상담중";
      });
      const checkedData = dashboardData.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in checkedList) {
          if (!fullList.includes(key)) return false;
        }
        return true;
      });

      if (type === "toggle-on") {
        dispatch(success(consultingData));
      } else if (type === "toggle-off") {
        dispatch(success(dashboardData));
      } else if (type === "check") {
        dispatch(success(checkedData));
      }
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}
