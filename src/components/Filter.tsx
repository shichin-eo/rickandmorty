import React, { useState } from "react";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import Flex from "./Flex";

interface FilterI {
  filters: string[];
  filtersHandler: (filter: string, action: string) => void;
}

const Filter: React.FC<FilterI> = (props) => {
  const { filters, filtersHandler } = props;
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Flex justify="flex-end" align="center" width="20%">
      {filters.length ? "Filters:" : ""}
      {filters.map((filter, index) => (
        <Flex
          key={index}
          justify="center"
          align="center"
          width="20%"
          margin="2%"
        >
          {filter}
          <Button onClick={() => filtersHandler(filter, "delete")}>X</Button>
        </Flex>
      ))}
      <Button width="30%" border={true} height="100%" onClick={toggleHandler}>
        {toggle ? "Hide filters" : "Add filter"}
      </Button>
      {toggle ? (
        <DropdownMenu filtersHandler={filtersHandler}></DropdownMenu>
      ) : null}
    </Flex>
  );
};

export default Filter;
