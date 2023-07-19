import styled from "styled-components";
import colors from "../../subatomics/colors";

export const StarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  background-color: ${colors.primaryBrand};
  color: black;

  > div {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;
