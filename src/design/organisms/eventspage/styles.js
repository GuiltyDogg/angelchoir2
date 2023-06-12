import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${whitespace.base};
  font-size: 50px;
  font-family: ${fonts.font};
`;

export const EventBox = styled.div`
  border: 2px solid ${colors.darkGray};
  padding-left: ${whitespace.base};
  font-family: ${fonts.font};
  background-color: ${colors.lightGray};
  border-radius: ${borderradius.most};
  margin-bottom: ${whitespace.base};
  margin-left: ${whitespace.more};
  margin-right: ${whitespace.most};
`;

export const EventDiv = styled.div`
  background-color: ${colors.bgWhite};
  padding-bottom: ${whitespace.most};
`;
