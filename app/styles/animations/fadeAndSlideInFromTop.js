import { css } from 'styled-components';

const fadeAndSlideInFromTop = css`
  0% {
    opacity: 0;
    transform: translateY(-0.5em);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default fadeAndSlideInFromTop;
