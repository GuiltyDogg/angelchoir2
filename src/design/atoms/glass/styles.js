import styled from "styled-components";

export const OverlayPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  opacity: 70%;
`;
