import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const StarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  background-color: ${colors.primaryBrand};
  color: black;
  // border: solid 2px black;

  > div {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .filled-star {
    color: gold;
  }
`;

export const StarDetails = styled.div`
  display: flex;
  textarea {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    margin-top: ${whitespace.base};
    margin-bottom: ${whitespace.base};
  }
`;

export const ButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${whitespace.base};
`;
