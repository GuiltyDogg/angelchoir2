import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  ${fonts.font};
`;

export const EventBox = styled.div`
  position: relative;
  border: 2px solid ${colors.darkGray};
  padding-left: ${whitespace.base};
  ${fonts.font};
  background-color: ${colors.lightGray};
  border-radius: ${borderradius.most};
  margin-bottom: ${whitespace.base};
  margin-left: ${whitespace.base};
  margin-right: ${whitespace.base};
`;

export const EventDiv = styled.div`
  background-color: ${colors.bgWhite};
  padding-bottom: ${whitespace.base};
  width: 100%;
`;

export const EventImage = styled.img`
  position: absolute;
  bottom: ${whitespace.base};
  right: ${whitespace.base};
  width: 120px;
  height: 120px;
  border-radius: ${borderradius.circle};
`;
