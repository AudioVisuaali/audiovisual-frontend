import styled from 'styled-components';

const slideFromTop = `{
  0% {
    opacity: 0;
    transform: translateY(-0.5em);
  }

  10% {
    opacity: 0;
    transform: translateY(-0.5em);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`;

const fadeIn = `{
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}`;

export default styled.div`
  ${props =>
    props.dynamic
      ? `
        position: fixed;
        right: 30px;
        top: 30px;
        width: 400px;
        height: 225px;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        z-index: 999;

        animation: slideFromTop ease 500ms;
        -webkit-animation: slideFromTop ease 500ms;
        -moz-animation: slideFromTop ease 500ms;
        -o-animation: slideFromTop ease 500ms;
        -ms-animation: slideFromTop ease 500ms;
      
        @keyframes slideFromTop ${slideFromTop}
        @-moz-keyframes slideFromTop ${slideFromTop}
        @-webkit-keyframes slideFromTop ${slideFromTop}
        @-o-keyframes slideFromTop ${slideFromTop}
        @-ms-keyframes slideFromTop ${slideFromTop}
      `
      : `
        width: 100%;
        height: 100%;

        animation: fadeIn ease 450ms;
        -webkit-animation: fadeIn ease 450ms;
        -moz-animation: fadeIn ease 450ms;
        -o-animation: fadeIn ease 450ms;
        -ms-animation: fadeIn ease 450ms;
      
        @keyframes fadeIn ${fadeIn}
        @-moz-keyframes fadeIn ${fadeIn}
        @-webkit-keyframes fadeIn ${fadeIn}
        @-o-keyframes fadeIn ${fadeIn}
        @-ms-keyframes fadeIn ${fadeIn}
    `}
`;
