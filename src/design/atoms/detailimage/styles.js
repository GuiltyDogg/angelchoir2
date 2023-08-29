import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

export const DetailImage = styled.img`
  height: 60vh;
  border-radius: ${borderradius.most};
  display: block;
  margin: ${whitespace.base};
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const DetailInfo = styled.div``;

export const DetailTitle = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 28px;
  padding-left: ${whitespace.base};
  padding-right: ${whitespace.base};
  padding-bottom: ${whitespace.most};
`;

export const DetailKey = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: center;
  margin-bottom: ${whitespace.base};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const DetailValue = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: ${whitespace.base};
`;
