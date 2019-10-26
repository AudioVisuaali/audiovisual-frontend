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
  @keyframes fadeIn ${keyFrames};
`;
