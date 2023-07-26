import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const LogoImage = styled.img`
  display: block;
  margin: 0px auto;
  height: 200px;
  max-height: 17.5vh;
`;

export const LogoNav = styled.img`
  display: flex;
  height: 40px;
  filter: brightness(0%);
  margin-left: -20px;
  // background: green;
  margin-right: -30px;
  padding-left: ${whitespace.base};
`;
