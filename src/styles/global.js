import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 0px;
    border: 1px solid #ffffff;
  }

  span {
    color: #FFF;
  }

  button{
    cursor: pointer;
  }
`
