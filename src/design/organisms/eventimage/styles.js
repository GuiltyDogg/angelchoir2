import styled from "styled-components";
import colors from "../../subatomics/colors";
import whitespace from "../../subatomics/whitespace";
import borderradius from "../../subatomics/borderradius";

export const BlurredImage = styled.img`
  max-width: 94vw;
  border-radius: ${borderradius.most};
  display: block;
  filter: ${(props) => (props.isBlurred ? "blur(4px)" : "none")};
  cursor: pointer;
  opacity: ${(props) => (props.isBlurred ? ".45" : "1")};
`;

export const EventImageContainer = styled.div`
  position: relative;
  margin-bottom: ${whitespace.base};
  margin-top: ${whitespace.base};
  border-radius: ${borderradius.most};
`;

export const EventInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: ${(props) => (props.showInfo ? 1 : 0)};
  pointer-events: ${(props) => (props.showInfo ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

export const EventInfo = styled.div`
  text-align: center;
  color: ${colors.slateGray};
  padding-right: ${whitespace.most};
  padding-left: ${whitespace.most};

  button {
    margin-top: ${whitespace.most};
  }
`;

export const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  padding-left: ${whitespace.base};
  padding-right: ${whitespace.base};
  padding-bottom: ${whitespace.most};
`;

export const InfoKey = styled.div`
  font-weight: 800;
  margin-bottom: ${whitespace.base};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const InfoValue = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: ${whitespace.base};
`;
