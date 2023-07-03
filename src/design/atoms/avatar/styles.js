import styled from "styled-components";
import borderradius from "../../subatomics/borderradius";
import colors from "../../subatomics/colors";

export const AvatarCircle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 0 25vh;
  height: 25vh;
  max-height: 25vh;
  border-radius: ${borderradius.circle};
  box-shadow: inset 21px -21px 42px #a265e0, inset -21px 21px 42px #c07aff;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  // border: solid 1px black;

  input {
    position: absolute;
    inset: 0;
    opacity: 0;
  }
`;

export const AvatarStyles = styled.div`
  display: flex;
  height: 25vh;
  width: 25vh;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;

  svg {
    height: 17.5vh;
    width: 17.5vh;
    margin: auto;
    color: #f2f2f2;
  }
`;
