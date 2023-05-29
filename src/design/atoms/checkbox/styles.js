import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const StyledCheck = styled.label`
  margin: ${whitespace.most} 0;
  display: flex;
  font-weight: bold;
  justify-content: space-between;

  svg {
    height: 20px;
    margin: 1px ${whitespace.least};
  }
`;
