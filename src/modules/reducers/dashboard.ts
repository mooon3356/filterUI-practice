import {
  storeData,
  STOREDATA,
  CHECKFILTER,
  checkFilter,
} from "../actions/index";
import { Data } from "../../types/reducer";

export type DashboardState = {
  data: Data[] | null | undefined;
};

export const initialState = {
  data: null,
};

export type DashboardAction =
  | ReturnType<typeof storeData>
  | ReturnType<typeof checkFilter>;

function dashboard(
  state: DashboardState = initialState,
  action: DashboardAction
) {
  switch (action.type) {
    case STOREDATA:
      return { data: action.payload };
    case CHECKFILTER:
      const filtered = state.data?.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in action.payload) {
          if (!fullList.includes(key)) {
            return false;
          }
        }
        return true;
      });
      return { data: filtered };
    default:
      return state;
  }
}

export default dashboard;
