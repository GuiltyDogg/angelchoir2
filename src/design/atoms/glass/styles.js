import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const Window = styled.div`
  padding: ${whitespace.base};
  background-color: rgba(255, 255, 255, 0.8);
  // background-color: rgba(191, 135, 246, 0.8);
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  height: 50%;
  border-radius: ${borderradius.most};
  text-align: center;
  font-family: ${fonts.font};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const CheckInImage = styled.img`
  margin: ${whitespace.most};
  width: 250px;
  height: 250px;
  border-radius: ${borderradius.circle};
`;

export const PageContainer = styled.div`
  position: relative;
`;
