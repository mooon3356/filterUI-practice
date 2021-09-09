import { RootState } from "../modules/reducers";
import { useSelector, useDispatch } from "react-redux";
import { storeData, checkFilter } from "../modules/actions";
import { Data } from "../types/reducer";

function useDashboard() {
  const data = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const onStoreData = (data: Data[]) => dispatch(storeData(data));
  const onCheckFilter = (checkedList: {[key:string]: boolean}) =>
    dispatch(checkFilter(checkedList));

  return { data, onStoreData, onCheckFilter };
}

export default useDashboard;
