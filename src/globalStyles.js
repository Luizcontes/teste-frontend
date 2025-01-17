import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  background-color: ${(props) => props.color};
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

export default GlobalStyle