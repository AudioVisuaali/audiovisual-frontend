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
        width: 800px;
        height: 450px;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        z-index: 999;

        @media screen and (max-width: 2000px) {
          width: 600px;
          height: 337px;
        }

        @media screen and (max-width: 2000px) {
          width: 400px;
          height: 225px;
        }

        @media screen and (max-width: 500px) {
          width: 300px;
          height: 167px;
        }

        animation: slideFromTop ease 500ms;
        @keyframes slideFromTop ${slideFromTop}
      `
      : `
        width: 100%;
        height: 100%;

        animation: fadeIn ease 450ms;
        @keyframes fadeIn ${fadeIn}
    `}
`;
