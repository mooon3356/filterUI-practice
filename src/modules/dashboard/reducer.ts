import { createReducer } from "typesafe-actions";
import {
  DASHBOARD_GET,
  DASHBOARD_GET_SUCCESS,
  DASHBOARD_GET_ERROR,
  DASHBOARD_FILTER,
  DASHBOARD_FILTER_SUCCESS,
  DASHBOARD_FILTER_ERROR,
} from "./actions";
import { DashboardAction, DashboardState } from "./types";

const initialState: DashboardState = {
  data: {
    loading: false,
    error: null,
    data: null,
  },
};

const dashboard = createReducer<DashboardState, DashboardAction>(initialState, {
  [DASHBOARD_GET]: (state) => ({
    ...state,
    data: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [DASHBOARD_GET_SUCCESS]: (state, action) => ({
    ...state,
    data: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [DASHBOARD_GET_ERROR]: (state, action) => ({
    ...state,
    data: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [DASHBOARD_FILTER]: (state) => ({
    ...state,
  }),
  [DASHBOARD_FILTER_SUCCESS]: (state, action) => ({
    ...state,
    data: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [DASHBOARD_FILTER_ERROR]: (state, action) => ({
    ...state,
    data: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default dashboard;
