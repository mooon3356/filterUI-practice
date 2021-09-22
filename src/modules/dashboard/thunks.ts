import { RootState } from "./../reducers/index";
import { ThunkAction } from "redux-thunk";
import { getDashboardDataAsync, filterDashboardDataAsync } from "./actions";
import { getDashboardData } from "../../api/dashboard";
import { DashboardAction } from "./types";
import createAsyncThunk from '../../utils/createAsyncThunk';

export const getDashboardDataThunk = createAsyncThunk(getDashboardDataAsync, getDashboardData)

export function filterDashboardDataThunk(
  type: string, checkedList?: {[key:string]:boolean}
): ThunkAction<void, RootState, null, DashboardAction> {
  return async (dispatch) => {
    const { request, success, failure } = filterDashboardDataAsync;
    dispatch(request());
    try {
      const dashboardData = await getDashboardData();
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
      } else if (type === 'check') {
        dispatch(success(checkedData));
      }
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}
