import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";

export const StyledBar = styled.div`
  display: flex;
  padding: ${whitespace.base};
  justify-content: space-between;
  align-items: center;
`;

export const StyledTools = styled.div`
  color: ${colors.black};
  display: flex;
  padding: ${whitespace.base};
  font-size: 30px;
`;
