import { Wrapper } from "./Filter.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Component, ReactElement } from "react";

// export type SizeType = Pick<FilterProps, "size">;
export type CheckedType = Pick<FilterProps, "checkedList">;

export type FilterProps = {
  handler: () => void;
  checkedList: { [key: string]: boolean };
  component?: Component | ReactElement;
  // size: "small" | "medium";
  className?: string;
};

function Filter({ ...props }: FilterProps) {
  const { component, className, handler } = props;
  return (
    <Wrapper
      {...props}
      className={className}
      onClick={(e) => {
        handler();
        e.stopPropagation();
      }}
    >
      {component}
      <FontAwesomeIcon className="arrow-icon" icon={faSortDown} />
    </Wrapper>
  );
}

export default Filter;
