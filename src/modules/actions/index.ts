import { Data } from "../../types/reducer";

export const STOREDATA = "dashboard/STOREDATA" as const;

export const storeData = (data: Data) => ({ type: STOREDATA, payload: data });
