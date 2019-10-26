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

  @media screen and (max-width: 760px) {
    height: auto;
  }

  animation: fadeIn ease 1s;

  @keyframes fadeIn ${slideFromTop}
`;
