import React from "react";
import Flex from "./Flex";

const Header = () => {
  return (
    <Flex direction="row" justify="flex-start" margin="5px 0 0 0">
      <Flex
        width="10%"
        height="auto"
        justify="center"
        align="center"
        margin="5px"
        fontsize="1.5vw"
      >
        EPISODES
      </Flex>
      <Flex
        width="90%"
        height="auto"
        justify="center"
        align="center"
        margin="5px"
        fontsize="1.5vw"
      >
        CHARACTERS
      </Flex>
    </Flex>
  );
};

export default Header;
