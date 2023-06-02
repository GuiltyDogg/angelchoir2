import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";

export const AvatarCircle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${borderradius.circle};
  border: solid 1px black;
  overflow: hidden;
  height: 3000px;
`;

export const AvatarStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: ${whitespace.most} auto;
  height: 240px;
  color: white;
  opacity: 50%;

  svg {
    height: 220px;
  }
`;
