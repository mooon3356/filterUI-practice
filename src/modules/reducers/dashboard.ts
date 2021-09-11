import {
  storeData,
  STOREDATA,
  CHECKFILTER,
  checkFilter,
  consultingFilter,
  CONSULTINGFILTER,
} from "../actions/index";
import { Data } from "../../types/reducer";

export type DashboardState = {
  data: null | Data[] | undefined;
  currentData: null | Data[] | undefined;
};

export const initialState = {
  data: null,
  currentData: null,
};

export type DashboardAction =
  | ReturnType<typeof storeData>
  | ReturnType<typeof checkFilter>
  | ReturnType<typeof consultingFilter>;

function dashboard(
  state: DashboardState = initialState,
  action: DashboardAction
) {
  switch (action.type) {
    case STOREDATA:
      return { ...state, data: action.payload, currentData: action.payload };

    case CHECKFILTER:
      if (Object.keys(action.payload).length === 0) {
        return { ...state, currentData: state.data };
      }
      const filtered = state.data?.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in action.payload) {
          if (!fullList.includes(key)) return false;
        }
        return true;
      });
      return { ...state, currentData: filtered };

    case CONSULTINGFILTER:
      if (action.payload) {
        const statusFiltered = state.data?.filter((el) => {
          return el.status === "상담중";
        });
        return { ...state, currentData: statusFiltered };
      } else {
        return { ...state, currentData: state.data };
      }

    default:
      return state;
  }
}

export default dashboard;
