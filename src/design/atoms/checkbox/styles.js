import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const StyledCheck = styled.label`
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin: ${whitespace.more} 0;

  svg {
    height: 20px;
    margin: 1px ${whitespace.least};
  }
`;
