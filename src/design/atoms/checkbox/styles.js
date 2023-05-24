import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const StyledCheck = styled.label`
  margin: ${whitespace.most} 0;
  display: block;
  font-weight: bold;
  letter-spacing: 1px;

  svg {
    margin-left: ${whitespace.less};
  }
`;
