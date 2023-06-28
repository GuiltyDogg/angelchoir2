import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: block;
  padding: ${whitespace.more};
  margin: ${whitespace.more};
  border: ${colors.black};
  border-radius: ${borderradius.medium};
  background-color: ${colors.white};
`;
