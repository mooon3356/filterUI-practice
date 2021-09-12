import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Data } from "../../types/reducer";

export type DashboardAction = ActionType<typeof actions>;

export type DashboardState = {
  data: {
    loading: boolean;
    error: Error | null;
    data: Data[] | null | undefined;
  };
};
