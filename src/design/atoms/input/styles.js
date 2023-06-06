import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${whitespace.more};
  margin: ${whitespace.more} 0;
  border: ${colors.black};
  border-radius: ${borderradius.medium};
  background-color: ${colors.white};
`;
