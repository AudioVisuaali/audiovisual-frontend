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

export default styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn ${slideFromTop}
  @-moz-keyframes fadeIn ${slideFromTop}
  @-webkit-keyframes fadeIn ${slideFromTop}
  @-o-keyframes fadeIn ${slideFromTop}
  @-ms-keyframes fadeIn ${slideFromTop}
`;
