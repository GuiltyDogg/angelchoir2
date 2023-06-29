import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Window = styled.div`
  padding: ${whitespace.most};
  background-color: rgba(255, 255, 255, 0.9);
  //   background-color: rgba(191, 135, 246, 0.9);
  display: block;
  flex-direction: column;
  width: 90%;
  align-items: center;
  height: 50%;
  border-radius: ${borderradius.most};
  text-align: center;
  font-family: ${fonts.font};
  // position: absolute;
  // margin: auto;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // z-index: 9999;
`;

export const GpsImage = styled.img`
  margin: ${whitespace.base};
  width: 250px;
  height: 250px;
  border-radius: ${borderradius.circle};
`;

export const AlertImage = styled.img`
  margin: ${whitespace.base};
  width: 250px;
  height: 250px;
  border-radius: ${borderradius.circle};
`;

export const CardContainer = styled.div`
  position: relative;
  transform: translate(-50%, -50%);
  margin-left: 100px;
`;
