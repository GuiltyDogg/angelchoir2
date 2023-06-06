import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const StyledTextBox = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 150px;
  min-height: 150px;
  padding: ${whitespace.more};
  border: ${colors.black};
  border-radius: ${borderradius.medium};
  background-color: ${colors.white};
  flex: 1 1 100%;
`;
