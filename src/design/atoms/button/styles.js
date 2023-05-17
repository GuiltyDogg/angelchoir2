import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";

export const ButtonStyles = styled.button`
  border: ${colors.black};
  background-color: ${colors.black};
  color: ${colors.white};
  padding: ${whitespace.more};
`;