import styled from "styled-components";

export const OverlayPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  position: relative;
  padding: 32px;
  width: 33%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
`;
