import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
  }
`
