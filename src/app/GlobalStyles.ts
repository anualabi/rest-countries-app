import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`${css`
  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.bg}};
  },
  button:focus:not(:focus-visible) {
    outline: none;
  }
`}`;
