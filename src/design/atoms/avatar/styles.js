import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const AvatarStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: ${whitespace.most} auto;
  height: 240px;

  svg {
    height: 220px;
  }
`;
