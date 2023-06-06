import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";

export const AvatarCircle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 200px;
  width: 200px;
  border-radius: ${borderradius.circle};
  background: #bf87f6;
  box-shadow: inset 21px -21px 42px #b580ea, inset -21px 21px 42px #c98eff;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const AvatarStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: ${whitespace.most} auto;
  color: white;
  align-items: center;

  svg {
    height: 150px;
    opacity: 50%;
  }

  img {
    height: 200px;
  }
`;
