import { CheckedListType } from "../containers/FilterContainer";
import { ModalStateType } from "../pages/Dashboard";

export type CheckBoxContainerProps = {
  type: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedList: CheckedListType;
};

export type FilterContainerProps = {
  modalState: ModalStateType;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
  itemIndexEnd: number;
};

export type RequestCardContainerProps = {
  itemIndex: {
    start: number;
    end: number;
  };

  setItemIndex: React.Dispatch<
    React.SetStateAction<{
      start: number;
      end: number;
    }>
  >;
};
