import { createGlobalStyle } from 'styled-components';

const backgroundColor = props =>
  props.theme.isDark ? props.theme.dark[500] : props.theme.grey[200];

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-color: ${backgroundColor};
  }

  body {
    font-family: 'Overpass', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Overpass', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100vh;
    width: 100%;
    min-width: 850px;
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

  .scroll-bars-fix:first-child > div:nth-child(3) {
    z-index: 21;
  }
`;

export default GlobalStyle;
