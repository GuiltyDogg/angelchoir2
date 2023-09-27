import styled from "styled-components";
import { AvatarCircle } from "../../atoms/avatar/styles";
import borderradius from "../../subatomics/borderradius";
import whitespace from "../../subatomics/whitespace";

export const CustomAvatarCircle = styled(AvatarCircle)`
  display: flex;
  flex-direction: column;

  width: 5vh;
  height: 5vh;
  box-shadow: inset 21px -21px 42px #a265e0, inset -21px 21px 42px #c07aff;
`;

export const AlertContainer = styled.div`

display: flex;
padding: ${whitespace.most} 0;
max-width: 100%;
overflow: hidden;
`;


export const AlertControls = styled.div`
  flex: 0 0 80px;
  height: 100px;
  display: block;

  svg {
    display: block;
    margin: ${ whitespace.base } auto;
    font-size: 1.3rem;
  }
`;

export const AlertDetails = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 ${whitespace.base};

`;

export const AlertImage = styled.div`
  width: 100%;
  height: 200px;
  background: gray;
  
`;



