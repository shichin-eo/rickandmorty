import React from "react";
import { useActions } from "../hooks/useActions";
import Button from "./Button";
import Flex from "./Flex";

interface NavBarI {
  pages?: number[];
  currentPage?: number;
}

const NavBar: React.FC<NavBarI> = (props) => {
  const { pages, currentPage } = props;
  const { setEpisodesPage } = useActions();
  return (
    <Flex justify="flex-end" margin="2px">
      {pages?.map((p, i) => (
        <Button
          width="5%"
          key={i}
          height="3vh"
          border={true}
          opacity={p === currentPage ? "1" : "0.3"}
          onClick={() => setEpisodesPage(p)}
        >
          {p}
        </Button>
      ))}
    </Flex>
  );
};

export default NavBar;
