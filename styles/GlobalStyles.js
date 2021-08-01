import React from 'react'
import { createGlobalStyle } from "styled-components";

export default function GlobalStyles() {
  return (
    <GlobalStyle />
  )
}

// Styled Components
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body html #root {
    height: 100%;
  }

  .flex-row-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }
`;
