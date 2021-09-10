import { Component, ReactElement } from "react";
import { Wrapper } from "./Filter.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <Wrapper
      className={className}
      size={size}
      checkedList={checkedList}
      onClick={handler}
    >
      {component}
      <FontAwesomeIcon className="arrow-icon" icon={faSortDown} />
    </Wrapper>
  );
}

export default Filter;
