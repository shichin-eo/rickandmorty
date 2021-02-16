import React from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import Button from "./Button";
import Flex from "./Flex";

interface NavBarI {
  pages?: number[];
  currentPage?: number | string;
}

const NavBar: React.FC<NavBarI> = (props) => {
  const { pages, currentPage = 1 } = props;

  const { setEpisodesPage } = useActions();
  const history = useHistory();
  return (
    <Flex justify="flex-end" margin="2px">
      {pages?.map((p, i) => (
        <Button
          key={i}
          width="5%"
          height="3vh"
          border={true}
          opacity={Number(p) === Number(currentPage) ? "1" : "0.3"}
          onClick={() => {
            history.push(`/episode/${p}`);
            setEpisodesPage(p);
          }}
        >
          {p}
        </Button>
      ))}
    </Flex>
  );
};

export default NavBar;
