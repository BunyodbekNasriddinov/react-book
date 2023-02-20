import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }
  main {
    flex-grow: 1;
  }
  img {
    vertical-align: middle;
    object-fit: cover;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
