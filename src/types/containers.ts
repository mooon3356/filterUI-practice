import { CheckedListType } from "../containers/FilterContainer";
import { ModalStateType } from "../pages/Dashboard";

export type CheckBoxContainerProps = {
  type: string;
  handleCheck: (e: any) => void;
  checkedList: CheckedListType;
};

export type FilterContainerProps = {
  modalState: ModalStateType;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
};
