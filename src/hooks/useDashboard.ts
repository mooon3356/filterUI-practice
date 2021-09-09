import { RootState } from "../modules/reducers";
import { useSelector, useDispatch } from "react-redux";
import { storeData, checkFilter, consultingFilter } from "../modules/actions";
import { Data } from "../types/reducer";

function useDashboard() {
  const data = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const onStoreData = (data: Data[]) => dispatch(storeData(data));
  const onCheckFilter = (checkedList: { [key: string]: boolean }) =>
    dispatch(checkFilter(checkedList));
  const onConsultingFilter = (toggle:boolean) => dispatch(consultingFilter(toggle));

  return { data, onStoreData, onCheckFilter, onConsultingFilter };
}

export default useDashboard;
