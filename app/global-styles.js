import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #282828;
    height: 100vh;
    width: 100vw;
  }

  button:hover {
    cursor: pointer;
  }

  *:focus {
    color: #fff;
    outline-width: 0;
  }
`;

export default GlobalStyle;
