import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-color: #282828;
  }

  body {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100vh;
    width: 100vw;
  }

  button {
    font-family: inherit;
    
    &:hover {
      cursor: pointer;
    }
  }

  *:focus {
    color: #fff;
    outline-width: 0;
  }

  @media screen and (max-width: 760px) {
    html,
    body {
      height: auto;
      overflow: visible;
    }
    
    & #app {
      height: auto;
      width: 100vw;
    }
  }
`;

export default GlobalStyle;
