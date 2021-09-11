import { CheckedListType } from "../containers/Filters";

export type CheckListProps = {
  type: string;
  handleCheck: (e: any) => void;
  checkedList: CheckedListType;
};

export type FiltersContainerType = {
  isOpen: boolean;
  modalType: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
};
