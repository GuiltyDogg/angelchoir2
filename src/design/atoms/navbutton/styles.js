import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";

export const StyledBar = styled.div`
  background-color: ${colors.darkGray};
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: fit-content;
`;

export const StyledTools = styled.div`
  color: ${colors.black};
  display: flex;
  padding: ${whitespace.most};
  font-size: 30px;
  margin-left: auto;
  margin-right: auto:
`;
