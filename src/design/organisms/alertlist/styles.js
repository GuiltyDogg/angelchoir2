import styled from "styled-components";
import { AvatarCircle } from "../../atoms/avatar/styles";
import borderradius from "../../subatomics/borderradius";

export const CustomAvatarCircle = styled(AvatarCircle)`
  display: flex;
  position: absolute;
  flex-direction: column;

  width: 3.5vh;
  height: 3.5vh;
  box-shadow: inset 21px -21px 42px #a265e0, inset -21px 21px 42px #c07aff;
`;

export const AlertContainer = styled.div``;
