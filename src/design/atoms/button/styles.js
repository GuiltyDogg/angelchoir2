import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import { button, largeText, text } from "../typography";

export const ButtonStyles = styled.button`
  ${button};
  width: 100%;
  border: ${colors.black};
  background-color: ${colors.slateGray};
  color: ${colors.white};
  padding: ${whitespace.most};
  border-radius: ${borderradius.medium};
  &:hover {
    background-color: ${colors.black};
  }
  &:disabled {
    background-color: transparent;
    border: ${colors.lightGray} 2px solid;
    color: ${colors.lightGray};
  }
`;
