import { Component, ReactElement } from "react";
import { Wrapper } from "./Filter.style";

export type FilterProps = {
  handler?: () => void;
  checkedList: { [key: string]: boolean };
  component?: Component | ReactElement;
  size: "small" | "medium";
  className?: string;
};

function Filter({
  size = "small",
  handler,
  checkedList,
  component,
  className,
}: FilterProps) {
  const count = Object.keys(checkedList).length;
  return (
    <Wrapper
      className={className}
      size={size}
      checkedList={checkedList}
      onClick={handler}
    >
      {component}
    </Wrapper>
  );
}

export default Filter;
