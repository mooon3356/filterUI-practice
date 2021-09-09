import { Data } from "../../types/reducer";

export const STOREDATA = "dashboard/STOREDATA" as const;
export const CHECKFILTER = "dashboard/CHECKFILTER" as const;
export const CONSULTINGFILTER = "dashboard/CONSULTINGFILTER" as const;

export const storeData = (data: Data[]) => ({ type: STOREDATA, payload: data });
export const checkFilter = (checkedList: { [key: string]: boolean }) => ({
  type: CHECKFILTER,
  payload: checkedList,
});
export const consultingFilter = (toggle: boolean) => ({
  type: CONSULTINGFILTER,
  payload: toggle,
});
