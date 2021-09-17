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
  [DASHBOARD_GET]: (state, action) => {
    return {
      ...state,
      data: { loading: true, error: null, data: state.data.data },
    };
  },
  [DASHBOARD_GET_SUCCESS]: (state, action) => {
    if (!state.data.data) {
      return {
        ...state,
        data: { loading: false, error: null, data: action.payload },
      };
    } else {
      if (action.payload.length === 0) {
        console.log("action에 아무것도 없을 때");
        return {
          ...state,
          data: { loading: false, error: null, data: state.data.data },
        };
      }
      return {
        data: {
          loading: false,
          error: null,
          data: [...state.data.data, ...action.payload],
        },
      };
    }
  },
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
    data: {
      loading: true,
      error: null,
      data: null,
    },
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
