import React from "react";
import styled from "styled-components";
import { File, Sun, Moon, Home, Link } from "react-feather";

interface ButtonI {
  onClick?: () => void;
  width?: string;
  height?: string;
  icon?: string;
  border?: boolean;
  color?: string;
  background?: string;
  opacity?: string;
  hover?: boolean;
  fontsize?: string;
}

const StyledButton = styled.button<ButtonI>`
  height: ${(props) => props.height || "2vh"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || "transparent"};
  border-radius: 10px;
  color: ${(props) => props.theme.fontColor};
  border: 1px solid
    ${(props) => (props.border ? props.theme.borderColor : "transparent")};
  outline: none;
  cursor: pointer;
  opacity: ${(props) => props.opacity || "1"};
  font-size: ${(props) => props.fontsize || "1vw"};
  &:hover {
    background: ${(props) => (props.hover ? "lightblue" : props.theme.body)};
    color: ${(props) => (props.hover ? "#232188" : "none")};
  }
`;
const Button: React.FC<ButtonI> = (props) => {
  const setIcon = () => {
    switch (props.icon) {
      case "profile":
        return <File size={"1vw"} />;
      case "light":
        return <Sun size={"1vw"} />;
      case "dark":
        return <Moon size={"1vw"} />;
      case "home":
        return <Home size={"2vw"} />;
      case "link":
        return <Link size={"1vw"} />;
      default:
        return props.children;
    }
  };
  return <StyledButton {...props}>{setIcon()}</StyledButton>;
};

export default Button;
