import React from "react";
import Flex from "./Flex";
import styled from "styled-components";
import Button from "./Button";

interface DropdownMenuI {
  filtersHandler: (filters: string[]) => void;
  filters: string[];
}

const StyledDropdownMeny = styled.div<DropdownMenuI>`
  position: absolute;
  width: 30%;
  height: auto;
  top: 100%;
  right: 0;
  z-index: 5;
  background: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 2%;
`;

const DropdownMenu: React.FC<DropdownMenuI> = (props) => {
  const { filtersHandler, filters } = props;
  const filterTypes = ["Alive", "Dead"];
  return (
    <StyledDropdownMeny {...props}>
      <Flex direction="column">
        {filterTypes.map((filter, index) => (
          <Button
            key={index}
            height="5vh"
            hover={true}
            onClick={() => {
              if (!filters.includes(filter))
                filtersHandler(filters.concat(filter));
            }}
          >
            {filter}
          </Button>
        ))}
      </Flex>
    </StyledDropdownMeny>
  );
};

export default DropdownMenu;
