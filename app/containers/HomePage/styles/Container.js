import styled from 'styled-components';

const keyFrames = `{
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
  max-width: 400px;
  width: 100%;
  flex-shrink: 0;
  margin: 10px 10px 30px;

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn ${keyFrames}
  @-moz-keyframes fadeIn ${keyFrames}
  @-webkit-keyframes fadeIn ${keyFrames}
  @-o-keyframes fadeIn ${keyFrames}
  @-ms-keyframes fadeIn ${keyFrames}
`;
