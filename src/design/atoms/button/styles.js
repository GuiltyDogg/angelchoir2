import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import sizes from "../../subatomics/sizes";
import borderradius from "../../subatomics/borderradius";

export const ButtonStyles = styled.button`
  border: ${colors.black};
  background-color: ${colors.slateGray};
  color: ${colors.white};
  padding: ${whitespace.more};
  font-family: ${fonts.font};
  width: ${sizes.large};
  font-size: ${fonts.size};
  border-radius: ${borderradius.rounded};
`;
