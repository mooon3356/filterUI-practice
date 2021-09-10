import { Component, ReactElement } from "react";
import { arrow } from "../../images";
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
      <img className="arrow-icon" src={arrow}></img>
    </Wrapper>
  );
}

export default Filter;
