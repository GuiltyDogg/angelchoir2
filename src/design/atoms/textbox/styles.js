import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const StyledTextBox = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 150px;
  padding: ${whitespace.more};
  margin: ${whitespace.more} 0;
  border: ${colors.black};
  border-radius: ${borderradius.medium};
  background-color: ${colors.lightGray};
`;
