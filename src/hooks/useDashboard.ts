import { RootState } from "../modules/reducers";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../modules/actions";
import { Data } from "../types/reducer";

function useDashboard() {
  const data = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const onStoreData = (data: Data) => dispatch(storeData(data));

  return { data, onStoreData };
}

export default useDashboard;
