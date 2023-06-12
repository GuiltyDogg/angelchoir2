import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";

export const StyledBar = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledTools = styled.div`
  color: ${colors.black};
  display: flex;
  padding: ${whitespace.most};
  font-size: 30px;
`;
