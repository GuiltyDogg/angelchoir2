import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const Window = styled.div`
  padding: ${whitespace.base};
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
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

export const EventLocation = styled.img`
  position: static;
  margin: 30px;
  bottom: ${whitespace.base};
  right: ${whitespace.base};
  width: 200px;
  height: 200px;
  // border-radius: ${borderradius.circle};
`;

export const PageContainer = styled.div`
  position: relative;
`;
