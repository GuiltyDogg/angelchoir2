import fontSizes from "../../subatomics/font-sizes";
import styled from "styled-components";

export const button = {
  fontFamily: "Open Sans",
  fontSize: fontSizes.l,
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '1px'
};

export const text = {
  fontFamily: "Open Sans",
  fontSize: fontSizes.med
};

export const largeText = {
  fontFamily: "Open Sans",
  fontSize: fontSizes.l
};


export const Text = styled.div`
  ${text};
`;

export const LargeText = styled.div`
  ${largeText};
`;

export const Button = styled.div`
  ${largeText};
`;