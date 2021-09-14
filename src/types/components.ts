import { MouseEventHandler } from "react";
import { Component, ReactElement } from "react";

export type ButtonProps = {
  children?: string;
  handler?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  size?: "small" | "medium";
  color?: "primary" | "white";
};

export type CheckBoxProps = {
  el: string;
  checked: boolean;
  name: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FilterProps = {
  handler?: () => void;
  checkedList: { [key: string]: boolean };
  component?: Component | ReactElement;
  size: "small" | "medium";
  className?: string;
};

export type ModalProps = {
  isOpen: boolean;
  handleModal?: () => void;
  component?: Component | ReactElement;
  type?: string;
};

export type NavProps = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToggleProps = {
    toggle: boolean;
    handleToggle: () => void;
  };