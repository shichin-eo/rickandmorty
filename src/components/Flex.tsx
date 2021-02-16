import React from "react";
import styled from "styled-components";

interface FlexI {
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  width?: string;
  height?: string;
  color?: string;
  position?: string;
  wrap?: string;
  border?: boolean;
  radius?: string;
  fontsize?: string;
  background?: string;
}
const StyledFlex = styled.div<FlexI>`
  position: ${(props) => props.position || "static"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0 0 0 0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  border: ${(props) => (props.border ? "1px solid" : "none")};
  border-color: ${(props) => props.color || props.theme.borderColor};
  border-radius: ${(props) => props.radius || "0px"};
  text-align: center;
  background: ${(props) => props.background || props.theme.body};
  color: ${(props) => props.color || props.theme.fontColor};
  font-size: ${(props) => props.fontsize || "1vw"};
  position: relative;
`;

const Flex: React.FC<FlexI> = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
