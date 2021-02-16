import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Flex from "./Flex";
import { useHistory, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface CharI {
  onClose?: () => void;
}

const StyledChar = styled.div<CharI>`
  position: fixed;
  width: 40%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
`;

const StyledImg = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border: 1px solid transparent;
  border-radius: 50%;
  margin: 2%;
`;

interface CharRouteParams {
  id: string;
}

const Char: React.FC<CharI> = (props) => {
  const { id } = useParams<CharRouteParams>();
  const history = useHistory();
  const { fetchCharacters } = useActions();

  const { currentChar } = useTypedSelector((state) => state.characters);
  useEffect(() => {
    fetchCharacters(id);
  }, [fetchCharacters, id]);

  return (
    <>
      <StyledChar {...props}>
        <Flex
          border={true}
          direction="row"
          height="100%"
          justify="space-around"
          align="center"
          radius="20px"
        >
          <Flex
            direction="column"
            justify="space-around"
            align="center"
            width="50%"
            height="80%"
          >
            <StyledImg
              src={currentChar?.image}
              alt={currentChar?.name}
            ></StyledImg>
            <Flex height="10%" justify="center" align="center" fontsize="1.5vw">
              {currentChar?.name}
            </Flex>
          </Flex>
          <Flex direction="column" justify="center" width="40%" margin="10px">
            <Flex height="20%" justify="center">
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                Gender:
              </Flex>
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                {currentChar?.gender}
              </Flex>
            </Flex>
            <Flex height="20%" justify="center">
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                Location:
              </Flex>
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                {currentChar?.location?.name}
              </Flex>
            </Flex>
            <Flex height="20%" justify="center">
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                Species:
              </Flex>
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                {currentChar?.species}
              </Flex>
            </Flex>
            <Flex height="20%" justify="center">
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                Status:
              </Flex>
              <Flex
                width="20%"
                justify="flex-start"
                align="center"
                margin="0 10%"
              >
                {currentChar?.status}
              </Flex>
            </Flex>
            <Flex height="20%" align="center" justify="center">
              <Button
                border={true}
                width="30%"
                height="50%"
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </StyledChar>
    </>
  );
};

export default Char;
