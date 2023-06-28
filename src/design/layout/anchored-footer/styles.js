import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const ScrollableWindow = styled.div`
  flex: 1 1 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  flex: 0 0 auto;
  margin: 0 ${whitespace.more} ${whitespace.more} ${whitespace.more};
`;
