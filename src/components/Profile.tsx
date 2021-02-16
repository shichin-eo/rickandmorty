import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import ReactDom from "react-dom";
import Flex from "./Flex";
import { Character } from "../types/character";

interface ProfileI {
  open?: boolean;
  onClose?: () => void;
  char?: Character;
}

const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
const StyledProfile = styled.div<ProfileI>`
  position: fixed;
  width: 40%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  z-index: 1001;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  animation: ${(props) => (props.open ? fadeInAnimation : fadeOutAnimation)} 1s
    ease;
  transition: visibility 2s linear;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 1px solid transparent;
  border-radius: 50%;
`;

const Profile: React.FC<ProfileI> = (props) => {
  const { char } = props;
  const portalDiv = document.getElementById("portal");
  if (!props.open) return null;
  return portalDiv
    ? ReactDom.createPortal(
        <>
          <StyledOverlay />
          <StyledProfile {...props}>
            <Flex
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
                <Flex
                  height="10%"
                  justify="center"
                  align="center"
                  fontsize="1.5vw"
                >
                  {char?.name}
                </Flex>
                <StyledImg src={char?.image} alt={char?.name}></StyledImg>
              </Flex>
              <Flex
                direction="column"
                justify="center"
                width="40%"
                margin="10px"
              >
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
                    {char?.gender}
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
                    {char?.location?.name}
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
                    {char?.species}
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
                    {char?.status}
                  </Flex>
                </Flex>
                <Flex height="20%" align="center" justify="center">
                  <Button
                    border={true}
                    width="30%"
                    height="50%"
                    onClick={props.onClose}
                  >
                    Close
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </StyledProfile>
        </>,
        portalDiv
      )
    : null;
};

export default Profile;
