import styled from "styled-components";
import whitespace from "../../subatomics/whitespace";
import fonts from "../../subatomics/fonts";
import borderradius from "../../subatomics/borderradius";

// export const OverlayPage = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Window = styled.div`
  padding: ${whitespace.base};
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  height: 50%;
  border-radius: ${borderradius.most};
  text-align: center;
  font-family: ${fonts.font};
`;
