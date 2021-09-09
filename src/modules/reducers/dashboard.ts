import {
  storeData,
  STOREDATA,
  CHECKFILTER,
  checkFilter,
} from "../actions/index";
import { Data } from "../../types/reducer";

export type DashboardState = {
  data: null | Data[] | undefined;
  checkedData: null | Data[] | undefined;
};

export const initialState = {
  data: null,
  checkedData: null,
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
      return { ...state, data: action.payload, checkedData: action.payload };
    case CHECKFILTER:
      if (Object.keys(action.payload).length === 0) {
        console.log('안에 아무것도 없음')
        return {...state, checkedData: state.data};
      }
      const filtered = state.data?.filter((el) => {
        const fullList = [...el.method, ...el.material];
        for (let key in action.payload) {
          if (!fullList.includes(key)) {
            return false;
          }
        }
        return true;
      });
      return { ...state, checkedData: filtered };
    default:
      return state;
  }
}

export default dashboard;
