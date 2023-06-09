import styled from "styled-components";
import colors from "../../subatomics/colors";

export const StarStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 30px;
  background-color: ${colors.primaryBrand};
`;
