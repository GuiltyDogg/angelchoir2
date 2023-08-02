import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

export const EventDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBrand};
  position: relative;
`;
