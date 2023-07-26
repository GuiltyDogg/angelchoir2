import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

// export const EventBox = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid ${colors.darkGray};
//   // padding-left: ${whitespace.base};
//   background-color: ${colors.lightGray};
//   border-radius: ${borderradius.most};
//   margin-bottom: ${whitespace.base};
//   margin-left: ${whitespace.base};
//   margin-right: ${whitespace.base};
// `;

export const EventDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGray};
`;

export const EventImage = styled.img`
  max-width: 94vw;
  border-radius: ${borderradius.most};
  margin-bottom: ${whitespace.base};
  &:active {
    filter: blur(4px);
`;
