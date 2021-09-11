import { CheckedListType } from "../containers/FilterContainer";

export type CheckBoxContainerProps = {
  type: string;
  handleCheck: (e: any) => void;
  checkedList: CheckedListType;
};

export type FilterContainerProps = {
  isOpen: boolean;
  modalType: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
};
