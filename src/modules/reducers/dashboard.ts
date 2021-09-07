import { storeData, STOREDATA } from "../actions/index";
import { Data } from "../../types/reducer";

export type DashboardState = {
  data: Data | null;
};

export const initialState = {
  data: null,
};

export type DashboardAction = ReturnType<typeof storeData>;

function dashboard(
  state: DashboardState = initialState,
  action: DashboardAction
) {
  switch (action.type) {
    case STOREDATA:
      return { data: action.payload };
  }
  return state;
}

export default dashboard;
